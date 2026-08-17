import { NextResponse } from "next/server";
import { getVisitorSession } from "@/lib/visitor-session";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const visitorId = await getVisitorSession();

    if (!visitorId) {
      return NextResponse.json(
        {
          authenticated: false,
        },
        { status: 401 }
      );
    }

    const visitor = await prisma.visitor.findUnique({
      where: {
        id: visitorId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        purpose: true,
        verificationStatus: true,
      },
    });

    if (!visitor || visitor.verificationStatus !== "VERIFIED") {
      return NextResponse.json(
        {
          authenticated: false,
        },
        { status: 401 }
      );
    }

    return NextResponse.json({
      authenticated: true,
      visitor: {
        id: visitor.id,
        name: visitor.name,
        purpose: visitor.purpose,
      },
    });
  } catch (error) {
    console.error("Visitor session error:", error);

    return NextResponse.json(
      {
        authenticated: false,
      },
      { status: 500 }
    );
  }
}