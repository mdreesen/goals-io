"use client"

import React from "react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { formatCurrency } from '@/lib/formatters';

export const UseRevenueChart = ({ data }: any) => {

  return (
    <>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" stroke="black" />
          <YAxis tickFormatter={tick => formatCurrency(tick)} stroke="black" />
          <CartesianGrid stroke="white" />
          <Tooltip formatter={value => formatCurrency(value as number)} />
          <Line name="Revenue Per Month" type="monotone" dataKey="Revenue of month" stroke="black" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}