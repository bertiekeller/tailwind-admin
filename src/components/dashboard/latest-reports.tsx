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
        <span className="mr-2 text-xl">≡</span>
        <h2 className="text-xl font-semibold">Latest Reports</h2>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-[100px] font-bold uppercase text-gray-700">NAME</TableHead>
              <TableHead className="font-bold uppercase text-gray-700">LAST NAME</TableHead>
              <TableHead className="font-bold uppercase text-gray-700">PHONE</TableHead>
              <TableHead className="font-bold uppercase text-gray-700">EMAIL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reportData.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="font-medium">{report.firstName}</TableCell>
                <TableCell>{report.lastName}</TableCell>
                <TableCell>{report.phone}</TableCell>
                <TableCell>{report.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 