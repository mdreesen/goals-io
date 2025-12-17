
export function years(data: Array<any>) {
    const now = new Date();


    const years = data?.map((item: any) => {
        const dates = item?.book_start_date || item?.book_end_date;


        // Create a Date object from the string
        const date = new Date(dates);

        // Extract the year
        const year = date.getFullYear();

        return year;

    }).filter((item: any) => item);

    const convertYears = [...new Set(years.sort())].reverse();

    console.log(convertYears)

    switch (true) {
        case convertYears.length === 1:
            return [now.getFullYear(), ...convertYears];
            break
        default:
            return convertYears
    };
};