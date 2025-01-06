import { Suspense } from "react";
import { booksByMonth } from "@/actions/charts";

// Charts
import {UseBooksPerMonthChart}  from "@/components/charts/UseBooksPerMonthChart";

export default async function Page() {


    // Chart Data
    const booksPerMonth = await booksByMonth();

    const revenueSection = (
        <div className="relative lg:col-span-3 border-solid rounded-md p-2 content-center">
            <h2 className="text-base/7 font-semibold text-indigo-900">Books Per Month</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <UseBooksPerMonthChart data={booksPerMonth} />
            </Suspense>
        </div>
    );

    // const customerSection = useSettings.showCustomersChart && (
    //     <div className="relative lg:col-span-3 border-solid rounded-md p-2 content-center">
    //         <h2 className="text-base/7 font-semibold text-indigo-900">Customers Per Month</h2>
    //         <Suspense fallback={<div>Loading...</div>}>
    //             <UseCustomersChart data={allCustomers} />
    //         </Suspense>
    //     </div>
    // );

    // const expensesChart = useSettings.showExpensesChart && (
    //     <div className="relative lg:col-span-3 content-center">
    //         <h2 className="text-base/7 font-semibold text-indigo-900">Expenses</h2>
    //         <Suspense fallback={<div>Loading...</div>}>
    //             <UseExpensesChart data={useExpenses} />
    //         </Suspense>
    //     </div>
    // );

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    {revenueSection}
                    {/* {customerSection}
                    {expensesChart} */}
                </div>
            </div>
        </div>
    )
}
