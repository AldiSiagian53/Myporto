import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, purpose } = body;

    if (!name || !email || !purpose) {
      return NextResponse.json(
        { error: "Name, email, and purpose are required." },
        { status: 400 }
      );
    }

    const visitor = await prisma.visitor.create({
      data: {
        name,
        email,
        purpose,
        verificationStatus: "PENDING",
      },
    });

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
      { error: "Failed to record visitor." },
      { status: 500 }
    );
  }
}