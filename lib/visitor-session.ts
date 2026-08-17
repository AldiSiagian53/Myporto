import { cookies } from "next/headers";

const VISITOR_COOKIE = "portfolio_visitor";

export async function setVisitorSession(visitorId: string) {
  const cookieStore = await cookies();

  cookieStore.set(VISITOR_COOKIE, visitorId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}

export async function getVisitorSession() {
  const cookieStore = await cookies();

  return cookieStore.get(VISITOR_COOKIE)?.value ?? null;
}
