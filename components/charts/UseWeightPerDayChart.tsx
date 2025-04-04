"use client"

import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const UseWeightPerDayChart = ({ data }: any) => {

  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid stroke="white" />
        <XAxis dataKey="weight_date" stroke="black" />
        <YAxis />
        <Tooltip />
        <Line name="weight" type="monotone" dataKey="weight" stroke="black" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
};