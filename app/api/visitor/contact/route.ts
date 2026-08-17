import { NextResponse } from "next/server";
import { getVisitorSession } from "@/lib/visitor-session";
import { prisma } from "@/lib/prisma";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    // Visitor session
    const visitorId = await getVisitorSession();

    if (!visitorId) {
      return NextResponse.json(
        { error: "Visitor session required." },
        { status: 401 }
      );
    }

    // Rate limit
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";

    const limit = rateLimit(`contact:${ip}`);

    if (!limit.success) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    const { name, email, subject, message } = body;

    // Required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          error: "Name, email, subject, and message are required.",
        },
        { status: 400 }
      );
    }

    // Type validation
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        {
          error: "Invalid input.",
        },
        { status: 400 }
      );
    }

    // Length validation
    if (
      name.length > 100 ||
      email.length > 150 ||
      subject.length > 200 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        {
          error: "Input is too long.",
        },
        { status: 400 }
      );
    }

    // Verify visitor
    const visitor = await prisma.visitor.findUnique({
      where: {
        id: visitorId,
      },
      select: {
        id: true,
        verificationStatus: true,
      },
    });

    if (!visitor || visitor.verificationStatus !== "VERIFIED") {
      return NextResponse.json(
        {
          error: "Visitor is not verified.",
        },
        { status: 403 }
      );
    }

    // Create message
    const contactMessage = await prisma.contactMessage.create({
      data: {
        visitorId: visitor.id,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject.trim(),
        message: message.trim(),
        status: "NEW",
      },
    });

    return NextResponse.json(
      {
        message: "Message sent successfully.",
        messageId: contactMessage.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Failed to send message.",
      },
      { status: 500 }
    );
  }
}