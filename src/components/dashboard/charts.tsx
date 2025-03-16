"use client";

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
  Cell
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ColorData {
  name: string;
  votes: number;
}

const colorData: ColorData[] = [
  { name: "Red", votes: 12 },
  { name: "Blue", votes: 19 },
  { name: "Yellow", votes: 3 },
  { name: "Green", votes: 5 },
  { name: "Purple", votes: 2 },
  { name: "Orange", votes: 3 }
];

const colorMap: Record<string, string> = {
  Red: "#f87171",
  Blue: "#60a5fa",
  Yellow: "#fcd34d",
  Green: "#6ee7b7",
  Purple: "#c084fc", 
  Orange: "#fdba74"
};

export function MonthlyReportsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <span className="mr-2">+</span> Monthly Reports
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={colorData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar 
                dataKey="votes" 
                name="# of Votes" 
                radius={[4, 4, 0, 0]}
                isAnimationActive={false}
                fill="#8884d8"
              >
                {colorData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colorMap[entry.name]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function ResolvedReportsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <span className="mr-2">✓</span> Resolved Reports
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={colorData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="votes" 
                name="# of Votes"
                stroke="#f87171" 
                fill="#fecaca" 
                isAnimationActive={false} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
} 