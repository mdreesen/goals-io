"use client";
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { dataPerYear, dataYears } from "@/actions/charts/coldSoakChart";
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import LoadingScale from "@/components/loaders/LoadingScale";

const chartConfig = {
  coldSoaks: {
    label: "Cold Soaks",
    color: "#60a5fa",
  }
} satisfies ChartConfig;

export const UseColdSoakPerMonthChart = ({ data }: any) => {

  const [chartData, setChartData] = useState([]) as any; // State for chart data
  const [year, setYear] = useState([]) as any; // State for chart data
  const [selectedYear, setSelectedYear] = useState(data?.years[0]);
  const [loading, setLoading] = useState(false);

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    },
  };

  // Animation variants for individual cards/items
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await dataPerYear(selectedYear);
      const useYear = await dataYears();
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
      variants={sectionVariants}
    >
      <motion.div variants={cardVariants}>

        <Card className="bg-gray-800 backdrop-blur-lg border border-gray-700 text-white">
          <CardHeader>
            <CardTitle>Cold Soaks Per Month</CardTitle>
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
                <Bar dataKey="coldSoaks" fill="var(--color-coldSoaks)" radius={4}></Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

      </motion.div>
    </motion.section>
  )
}