import { redirect } from "next/navigation";
import { getAdminSession } from "./admin-session";

export async function requireAdmin() {
  const session = await getAdminSession();

  if (!session || session.user.role !== "ADMIN") {
    redirect("/admin/login");
  }

  return session.user;
}