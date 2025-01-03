"use client"

import React from "react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const UseCustomersChart = ({ data }: any) => {

  return (
    <>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" stroke="black" />
          <YAxis stroke="black" />
          <CartesianGrid stroke="white" />
          <Tooltip />
          <Line name="Customers Per Month" type="monotone" dataKey="Customers per month" stroke="black" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}