"use client"

import React from "react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const UseWeightPerDay = ({ data }: any) => {

  return (
    <>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="weight_date" stroke="black" />
          <YAxis dataKey="weight"  stroke="black" />
          <CartesianGrid stroke="white" />
          <Tooltip />
          <Line name="weight" type="monotone" dataKey="weight" stroke="black" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
};