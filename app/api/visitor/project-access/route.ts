import { NextResponse } from "next/server";
import { getVisitorSession } from "@/lib/visitor-session";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const visitorId = await getVisitorSession();

    if (!visitorId) {
      return NextResponse.json(
        { error: "Visitor session required." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { projectId } = body;

    if (!projectId || typeof projectId !== "string") {
      return NextResponse.json(
        { error: "Project ID is required." },
        { status: 400 }
      );
    }

    const visitor = await prisma.visitor.findUnique({
      where: { id: visitorId },
      select: {
        id: true,
        verificationStatus: true,
      },
    });

    if (!visitor || visitor.verificationStatus !== "VERIFIED") {
      return NextResponse.json(
        { error: "Visitor is not verified." },
        { status: 403 }
      );
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
      select: {
        id: true,
      },
    });

    if (!project) {
      return NextResponse.json(
        { error: "Project not found." },
        { status: 404 }
      );
    }

    const access = await prisma.projectAccess.create({
      data: {
        visitorId,
        projectId,
      },
    });

    return NextResponse.json(
      {
        message: "Project access recorded successfully.",
        accessId: access.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Project access API error:", error);

    return NextResponse.json(
      { error: "Failed to record project access." },
      { status: 500 }
    );
  }
}