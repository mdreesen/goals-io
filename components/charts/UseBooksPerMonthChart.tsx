"use client";
import React, { useEffect, useState } from "react"
import { booksPerYear, bookYears } from "@/actions/charts/bookChart";
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const chartConfig = {
  start_date: {
    label: "Books Started",
    color: "#2563eb",
  },
  end_date: {
    label: "Books Finished",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export const UseBooksPerMonthChart = ({ data }: any) => {

  const [chartData, setChartData] = useState([]) as any; // State for chart data
  const [year, setYear] = useState([]) as any; // State for chart data
  const [selectedYear, setSelectedYear] = useState(data?.years[0]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await booksPerYear(selectedYear);
      const useBookYear = await bookYears();
      setChartData(data);
      setYear(useBookYear);
    };
    fetchData();
  }, [selectedYear]);

  const dropdown = data?.years?.length > 0 && (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{selectedYear}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select year</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={selectedYear} onValueChange={setSelectedYear}>
          {year.map((item: string) => <DropdownMenuRadioItem value={item} key={item}>{item}</DropdownMenuRadioItem>)}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Books Per Month</CardTitle>
          <CardDescription className='flex gap-2 items-center'>January - December {dropdown}</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="start_date" fill="var(--color-start_date)" radius={4}></Bar>
              <Bar dataKey="end_date" fill="var(--color-end_date)" radius={4}></Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}