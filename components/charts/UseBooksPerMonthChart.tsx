"use client"

import React from "react"
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const UseBooksPerMonthChart = ({ data }: any) => {

  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 8,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="white" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="Books Started" dataKey="start_date" fill="#c18d21" activeBar={<Rectangle fill="#c18d21" stroke="black" />} />
        <Bar name="Books Finished" dataKey="end_date" fill="#102945" activeBar={<Rectangle fill="#102945" stroke="black" />} />
      </BarChart>
    </ResponsiveContainer>
  )
}