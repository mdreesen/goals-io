// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

  export function ChartSkeleton() {
    return (
      <div className={`${shimmer} h-[300px] relative w-full md:col-span-4`}>
        {/* <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" /> */}
        <div className="rounded-xl border-l-[20px] border-b-[20px] border-gray-100">
          <div className="sm:grid-cols-13 mt-0 grid h-[300px] grid-cols-12 items-end gap-2 rounded-md  bg-white md:gap-4" />
          {/* <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div> */}
        </div>
      </div>
    );
  }