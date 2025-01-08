import { Suspense } from "react";
import { booksByMonth, weightByMonth } from "@/actions/charts";
import { ChartSkeleton } from '@/components/loaders/Skeletons';
import {parse} from '@/lib/formatters';

// Charts
import { UseBooksPerMonthChart }  from "@/components/charts/UseBooksPerMonthChart";
import { UseWeightPerDay }  from "@/components/charts/UseWeightPerDay";

export default async function Page() {

    // Chart Data
    const booksPerMonth = await booksByMonth();
    const weightPerMonth = await weightByMonth();

    const bookSection = (
        <div className="relative lg:col-span-3 border-solid rounded-md p-2 content-center">
            <h2 className="text-base/7 font-semibold text-indigo-900">Books Per Month</h2>
            <Suspense fallback={<ChartSkeleton/>}>
                <UseBooksPerMonthChart data={parse(booksPerMonth)} />
            </Suspense>
        </div>
    );

    const weightSection = (
        <div className="relative lg:col-span-3 border-solid rounded-md p-2 content-center">
            <h2 className="text-base/7 font-semibold text-indigo-900">Weight Per Day</h2>
            <Suspense fallback={<ChartSkeleton/>}>
                <UseWeightPerDay data={parse(weightPerMonth)} />
            </Suspense>
        </div>
    );

    // const expensesChart = useSettings.showExpensesChart && (
    //     <div className="relative lg:col-span-3 content-center">
    //         <h2 className="text-base/7 font-semibold text-indigo-900">Expenses</h2>
    //         <Suspense fallback={<div>Loading...</div>}>
    //             <UseExpensesChart data={useExpenses} />
    //         </Suspense>
    //     </div>
    // );

    return (
        <div className="bg-white py-12 sm:py-12">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-900">Dashboard</h2>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    {bookSection}
                    {weightSection}
                </div>
            </div>
        </div>
    )
}
