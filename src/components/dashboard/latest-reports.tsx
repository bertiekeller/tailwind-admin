"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ReportData {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

const reportData: ReportData[] = [
  {
    id: 1,
    firstName: "Lian",
    lastName: "Smith",
    phone: "622322662",
    email: "jonsmith@mail.com"
  },
  {
    id: 2,
    firstName: "Emma",
    lastName: "Johnson",
    phone: "622322662",
    email: "jonsmith@mail.com"
  },
  {
    id: 3,
    firstName: "Oliver",
    lastName: "Williams",
    phone: "622322662",
    email: "jonsmith@mail.com"
  },
  {
    id: 4,
    firstName: "Isabella",
    lastName: "Brown",
    phone: "622322662",
    email: "jonsmith@mail.com"
  },
  {
    id: 5,
    firstName: "Lian",
    lastName: "Smith",
    phone: "622322662",
    email: "jonsmith@mail.com"
  }
];

export function LatestReports() {
  return (
    <div className="mt-8">
      <div className="flex items-center mb-4">
        <span className="mr-2 text-xl text-yellow-400">≡</span>
        <h2 className="text-xl font-semibold text-white">Latest Reports</h2>
      </div>
      <div className="rounded-md border border-gray-700 bg-gray-800">
        <Table>
          <TableHeader className="bg-gray-900">
            <TableRow className="border-gray-700">
              <TableHead className="w-[100px] font-bold uppercase text-gray-400">NAME</TableHead>
              <TableHead className="font-bold uppercase text-gray-400">LAST NAME</TableHead>
              <TableHead className="font-bold uppercase text-gray-400">PHONE</TableHead>
              <TableHead className="font-bold uppercase text-gray-400">EMAIL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reportData.map((report) => (
              <TableRow key={report.id} className="border-gray-700 hover:bg-gray-700/50">
                <TableCell className="font-medium text-white">{report.firstName}</TableCell>
                <TableCell className="text-gray-300">{report.lastName}</TableCell>
                <TableCell className="text-gray-300">{report.phone}</TableCell>
                <TableCell className="text-yellow-400">{report.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 