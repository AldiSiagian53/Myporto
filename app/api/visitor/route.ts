import { setVisitorSession } from "@/lib/visitor-session";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { rateLimit } from "@/lib/rate-limit";

const allowedPurposes = [
  "RECRUITER",
  "CLIENT",
  "JUST_LOOKING",
  "COMPANY",
];

export async function POST(request: Request) {
  try {
    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    const limit = rateLimit(ip);

    if (!limit.success) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    // Read request body
    const body = await request.json();

    const { name, email, purpose } = body;

    // Required fields
    if (!name || !email || !purpose) {
      return NextResponse.json(
        {
          error: "Name, email, and purpose are required.",
        },
        { status: 400 }
      );
    }

    // Type validation
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof purpose !== "string"
    ) {
      return NextResponse.json(
        {
          error: "Invalid input.",
        },
        { status: 400 }
      );
    }

    // Length validation
    if (name.length > 100 || email.length > 150) {
      return NextResponse.json(
        {
          error: "Input is too long.",
        },
        { status: 400 }
      );
    }

    // Purpose validation
    if (!allowedPurposes.includes(purpose)) {
      return NextResponse.json(
        {
          error: "Invalid purpose.",
        },
        { status: 400 }
      );
    }

    // Create visitor
    const visitor = await prisma.visitor.create({
    data: {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    purpose,
    verificationStatus: "VERIFIED",
    ipAddress: ip,
    userAgent,
  },
});

    // Create visitor session
    await setVisitorSession(visitor.id);

    return NextResponse.json(
      {
        message: "Visitor recorded successfully.",
        visitorId: visitor.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Visitor API error:", error);

    return NextResponse.json(
      {
        error: "Failed to record visitor.",
      },
      { status: 500 }
    );
  }
}