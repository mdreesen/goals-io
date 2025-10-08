"use client";
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { workoutsPerYear, workoutYears } from "@/actions/charts/workoutChart";
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import LoadingScale from "@/components/loaders/LoadingScale";
import { chartVariants, cardVariants } from "@/lib/variants";

const chartConfig = {
  workouts: {
    label: "Workouts Per Month",
    color: "#60a5fa",
  }
} satisfies ChartConfig;

export const UseWorkoutPerMonthChart = ({ data }: any) => {

  const [chartData, setChartData] = useState([]) as any; // State for chart data
  const [year, setYear] = useState([]) as any; // State for chart data
  const [selectedYear, setSelectedYear] = useState(data?.years[0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await workoutsPerYear(selectedYear);
      const useYear = await workoutYears();
      setChartData(data);
      setYear(useYear);
      setLoading(false)
    };
    fetchData();
  }, [selectedYear]);

  const dropdown = data?.years?.length > 0 && (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{loading ? <LoadingScale width={3} height={15} /> : selectedYear}</Button>
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
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={chartVariants}
    >
      <motion.div transition={cardVariants}>

        <Card className="bg-gray-800 backdrop-blur-lg border border-gray-700 text-white">
          <CardHeader>
            <CardTitle>Workouts Per Month</CardTitle>
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
                <Bar dataKey="workouts" fill="var(--color-workouts)" radius={4}></Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

      </motion.div>
    </motion.section>
  )
}