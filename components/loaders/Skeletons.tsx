// Loading animation

export function ChartSkeleton() {
  return (
    <div className="w-[100%] h-[280px] flex justify-self-center">

      <div role="status" className="w-[100%] p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-l-gray-700">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
        <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="flex items-baseline mt-4">
          <div className="w-full bg-gray-200 rounded-t-lg h-[160px] dark:bg-gray-700"></div>
          <div className="w-full h-[110px] ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-full bg-gray-200 rounded-t-lg h-[187px] ms-6 dark:bg-gray-700"></div>
          <div className="w-full h-[150px] ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-full bg-gray-200 rounded-t-lg h-[170px] ms-6 dark:bg-gray-700"></div>
          <div className="w-full bg-gray-200 rounded-t-lg h-[130px] ms-6 dark:bg-gray-700"></div>
          <div className="w-full bg-gray-200 rounded-t-lg h-[187px] ms-6 dark:bg-gray-700"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>

    </div>

  );
}