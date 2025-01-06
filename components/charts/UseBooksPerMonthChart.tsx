"use client"

import React from "react"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const UseBooksPerMonthChart = ({ data }: any) => {

  return (
    <>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid stroke="white" />
          <XAxis dataKey="name" stroke="black" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line name="Books Started" type="monotone" dataKey="start_date" stroke="#c18d21" dot={false} />
          <Line name="Books Ended" type="monotone" dataKey="end_date" stroke="#102945" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}