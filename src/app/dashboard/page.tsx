"use client";

import { MonthlyReportsChart, ResolvedReportsChart } from "@/components/dashboard/charts";
import { LatestReports } from "@/components/dashboard/latest-reports";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <MonthlyReportsChart />
        <ResolvedReportsChart />
      </div>
      
      <LatestReports />
    </div>
  );
} 