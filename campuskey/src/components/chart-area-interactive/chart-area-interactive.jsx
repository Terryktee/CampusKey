"use client";

import React, { useState } from "react";
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const chartData = [/* your chart data here */];

const ChartArea = () => {
  const [timeRange, setTimeRange] = useState("30d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") daysToSubtract = 30;
    if (timeRange === "7d") daysToSubtract = 7;
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

  return (
    <Card className="p-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Total Visitors</CardTitle>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="90d">Last 3 months</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <AreaChart
          width={800}
          height={300}
          data={filteredData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1} />
            </linearGradient>
          </defs>
         <XAxis 
         dataKey="date" 
         tickFormatter={(value) => dateFormatter.format(new Date(value))}
          />
         <Tooltip 
         labelFormatter={(value) => dateFormatter.format(new Date(value))} 
         />
          <Area
            type="monotone"
            dataKey="mobile"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorMobile)"
          />
          <Area
            type="monotone"
            dataKey="desktop"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorDesktop)"
          />
        </AreaChart>
      </CardContent>
    </Card>
  );
};

export default ChartArea;
