import { NextResponse } from "next/server";
import { deleteAdminSession } from "@/lib/admin-session";

export async function POST() {
  try {
    await deleteAdminSession();

    return NextResponse.json({
      message: "Logout successful.",
    });
  } catch (error) {
    console.error("Admin logout error:", error);

    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}