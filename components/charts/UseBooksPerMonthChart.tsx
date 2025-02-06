"use client";
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { booksPerYear, bookYears } from "@/actions/charts";

import React, { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const UseBooksPerMonthChart = ({ data }: any) => {

  const [chartData, setChartData] = useState([]) as any; // State for chart data
  const [bookYear, setBookYear] = useState([]) as any; // State for chart data
  const [selectedYear, setSelectedYear] = useState(data?.years[0]);

  const fetchData = async () => {
    const data = await booksPerYear(selectedYear);
    const useBookYear = await bookYears();

    setChartData(data);
    setBookYear(useBookYear)
  };


  useEffect(() => {
    fetchData();

  }, [selectedYear]);

  const dropdown = data.years.length > 0 && (
    <Listbox value={selectedYear} onChange={setSelectedYear}>
      <div className='flex items-center gap-2'>
        <Label className="block text-sm/6 font-medium text-gray-900">Showing Year</Label>
        <div className="relative">
          <ListboxButton className="grid w-[auto] cursor-default grid-cols-1 rounded-md bg-white text-left text-gray-900 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6">
            <span className="col-start-1 row-start-1 truncate pr-6 text-sm/6">{selectedYear}</span>
            <ChevronUpDownIcon
              aria-hidden="true"
              className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-60 w-[100px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
          >
            {bookYear.map((item: any, index: number) => {
              return (
                <ListboxOption
                key={`${item}-${index}`}
                value={item}
                defaultValue={item}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-gray-900 data-[focus]:text-white data-[focus]:outline-none"
              >
                <span className="block truncate font-normal group-data-[selected]:font-semibold">{item}</span>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-900 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                  <CheckIcon aria-hidden="true" className="size-5" />
                </span>
              </ListboxOption>
              )
            })}
          </ListboxOptions>
        </div>
      </div>

    </Listbox>
  );

  return (
    <div>
      {dropdown}

        <ResponsiveContainer width='100%' height={300}>
          <BarChart
            width={600}
            height={300}
            data={chartData}
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
    </div>
  )
}