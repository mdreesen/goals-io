"use client";
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import { workoutsPerYear, workoutYears } from "@/actions/charts/workoutChart";
import LoadingScale from '../loaders/LoadingScale';

import React, { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export const UseWorkoutPerMonthChart = ({ data }: any) => {

  const [chartData, setChartData] = useState([]) as any; // State for chart data
  const [year, setYear] = useState([]) as any; // State for chart data
  const [selectedYear, setSelectedYear] = useState(data?.years[0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await workoutsPerYear(selectedYear);
      const useYear = await workoutYears();
      setLoading(true)
      setChartData(data);
      setYear(useYear);
      setLoading(false)
    };

    setLoading(true)
    fetchData();

  }, [selectedYear]);

  const Dropdown = () => {

    return data?.years?.length > 0 && (
      <Listbox value={selectedYear} onChange={setSelectedYear}>
        <div className='flex items-center gap-[5px]'>
          <Label className="block text-sm/6 font-medium text-gray-900">Year</Label>
          <div className="relative">
            {loading ? <LoadingScale height={15} width={2} /> : (
              <ListboxButton className="grid w-[auto] cursor-default grid-cols-1 rounded-md bg-white text-left text-gray-900 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6">
                <span className="col-start-1 row-start-1 truncate pr-6 text-sm/6">{selectedYear}</span>
                <ChevronUpDownIcon
                  aria-hidden="true"
                  className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </ListboxButton>
            )}


            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-60 w-[100px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {year.map((item: any, index: number) => {
                return (
                  <ListboxOption
                    key={`${item}-${index}`}
                    value={item}
                    defaultValue={item}
                    className="group relative cursor-default select-none py-2 pl-3 data-[focus]:bg-gray-900 data-[focus]:text-white data-[focus]:outline-none"
                  >
                    <span className="block truncate font-medium group-data-[selected]:font-semibold group-data-[selected]:text-white">{item}</span>

                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                      <CheckIcon aria-hidden="true" className="size-5" />
                    </span>
                  </ListboxOption>
                )
              })}
            </ListboxOptions>
          </div>
        </div>

      </Listbox>
    )

  };

  return (
    <div>
      <Dropdown />
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
          <Bar name="Number Of Workouts" dataKey="date" fill="#c18d21" activeBar={<Rectangle fill="#c18d21" stroke="black" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}