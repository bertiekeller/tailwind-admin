"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarItem = ({ href, icon, label }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="w-full">
      <div
        className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
          isActive
            ? "bg-blue-100/10 text-white"
            : "text-white/70 hover:bg-blue-100/10 hover:text-white"
        }`}
      >
        {icon}
        {label}
      </div>
    </Link>
  );
};

export function Sidebar() {
  return (
    <div className="fixed flex h-screen w-[160px] flex-col bg-blue-600">
      <div className="p-4">
        <h1 className="text-xl font-bold text-white">ADMIN</h1>
      </div>
      <div className="px-3 py-2">
        <Button className="w-full bg-white text-blue-600 hover:bg-white/90">
          <span className="mr-2">+</span> New Report
        </Button>
      </div>
      <div className="flex-1 space-y-1 p-2">
        <SidebarItem
          href="/dashboard"
          icon={<span className="text-lg">📊</span>}
          label="Dashboard"
        />
        <SidebarItem 
          href="/dashboard/blank"
          icon={<span className="text-lg">📄</span>}
          label="Blank Page"
        />
        <SidebarItem
          href="/dashboard/tables"
          icon={<span className="text-lg">📋</span>}
          label="Tables"
        />
        <SidebarItem
          href="/dashboard/forms"
          icon={<span className="text-lg">📝</span>}
          label="Forms"
        />
        <SidebarItem
          href="/dashboard/tabbed-content"
          icon={<span className="text-lg">📑</span>}
          label="Tabbed Content"
        />
        <SidebarItem
          href="/dashboard/calendar"
          icon={<span className="text-lg">📅</span>}
          label="Calendar"
        />
      </div>
      <div className="mt-auto p-4">
        <Button className="w-full bg-white/20 text-white hover:bg-white/30" variant="ghost">
          <span className="mr-2">⭐</span> Upgrade to Pro!
        </Button>
      </div>
    </div>
  );
} 