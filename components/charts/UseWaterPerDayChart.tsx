"use client"

import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
// https://stackoverflow.com/questions/50078787/recharts-set-y-axis-range

export const UseWaterPerDayChart = ({ data }: any) => {

  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid stroke="white" />
        <XAxis dataKey="date" stroke="black" />
        <YAxis domain={[0, 'dataMax + 75']} allowDataOverflow={true} />
        <Tooltip />
        <Line name="Water intake in oz." type="monotone" dataKey="water_intake" stroke="black" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
};