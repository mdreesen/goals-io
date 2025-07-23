"use client"

import React from "react";
import { motion } from 'framer-motion';
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
  weight: {
    label: "Weight",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export const UseWeightPerDayChart = ({ data }: any) => {

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
            <CardTitle>Weight Per Day</CardTitle>
            {/* <CardDescription>January - June 2024</CardDescription> */}
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <LineChart
                accessibilityLayer
                data={data}
                margin={{
                  left: 12,
                  right: 12,
                  top: 50
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="weight_date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Line
                  dataKey="weight"
                  type="natural"
                  stroke="var(--color-weight)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>

  )
};