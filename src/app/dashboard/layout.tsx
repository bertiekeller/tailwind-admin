"use client";

import { Sidebar } from "@/components/dashboard/sidebar";
import { Profile } from "@/components/dashboard/profile";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <div className="flex-1 pl-[160px]">
        <Profile />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
} 