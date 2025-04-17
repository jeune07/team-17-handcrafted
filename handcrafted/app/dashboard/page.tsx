// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-indigo-600 mb-4">
          Welcome back, {session.user?.name} 👋
        </h1>
        <p className="text-gray-800">Email: {session.user?.email}</p>
        <p className="text-gray-800">Role: {session.user?.role}</p>
      </div>
    </div>
  );
}
