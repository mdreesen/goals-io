import { useYear } from '~/stores/useYear';

export function monthStartEnd({ data, startLabel, endLabel }) {

    const now = new Date();
    const year = now.getFullYear();

    // Month to current year
    const january_start = data.filter((item: any) => item?.[startLabel]?.includes('Jan') && item?.[startLabel]?.includes(year)).length;
    const february_start = data.filter((item: any) => item?.[startLabel]?.includes('Feb') && item?.[startLabel]?.includes(year)).length;
    const march_start = data.filter((item: any) => item?.[startLabel]?.includes('Mar') && item?.[startLabel]?.includes(year)).length;
    const april_start = data.filter((item: any) => item?.[startLabel]?.includes('Apr') && item?.[startLabel]?.includes(year)).length;
    const may_start = data.filter((item: any) => item?.[startLabel]?.includes('May') && item?.[startLabel]?.includes(year)).length;
    const june_start = data.filter((item: any) => item?.[startLabel]?.includes('Jun') && item?.[startLabel]?.includes(year)).length;
    const july_start = data.filter((item: any) => item?.[startLabel]?.includes('Jul') && item?.[startLabel]?.includes(year)).length;
    const august_start = data.filter((item: any) => item?.[startLabel]?.includes('Aug') && item?.[startLabel]?.includes(year)).length;
    const september_start = data.filter((item: any) => item?.[startLabel]?.includes('Sep') && item?.[startLabel]?.includes(year)).length;
    const october_start = data.filter((item: any) => item?.[startLabel]?.includes('Oct') && item?.[startLabel]?.includes(year)).length;
    const november_start = data.filter((item: any) => item?.[startLabel]?.includes('Nov') && item?.[startLabel]?.includes(year)).length;
    const december_start = data.filter((item: any) => item?.[startLabel]?.includes('Dec') && item?.[startLabel]?.includes(year)).length;

    const january_end = data.filter((item: any) => item?.[endLabel]?.includes('Jan') && item?.[endLabel]?.includes(year)).length;
    const february_end = data.filter((item: any) => item?.[endLabel]?.includes('Feb') && item?.[endLabel]?.includes(year)).length;
    const march_end = data.filter((item: any) => item?.[endLabel]?.includes('Mar') && item?.[endLabel]?.includes(year)).length;
    const april_end = data.filter((item: any) => item?.[endLabel]?.includes('Apr') && item?.[endLabel]?.includes(year)).length;
    const may_end = data.filter((item: any) => item?.[endLabel]?.includes('May') && item?.[endLabel]?.includes(year)).length;
    const june_end = data.filter((item: any) => item?.[endLabel]?.includes('Jun') && item?.[endLabel]?.includes(year)).length;
    const july_end = data.filter((item: any) => item?.[endLabel]?.includes('Jul') && item?.[endLabel]?.includes(year)).length;
    const august_end = data.filter((item: any) => item?.[endLabel]?.includes('Aug') && item?.[endLabel]?.includes(year)).length;
    const september_end = data.filter((item: any) => item?.[endLabel]?.includes('Sep') && item?.[endLabel]?.includes(year)).length;
    const october_end = data.filter((item: any) => item?.[endLabel]?.includes('Oct') && item?.[endLabel]?.includes(year)).length;
    const november_end = data.filter((item: any) => item?.[endLabel]?.includes('Nov') && item?.[endLabel]?.includes(year)).length;
    const december_end = data.filter((item: any) => item?.[endLabel]?.includes('Dec') && item?.[endLabel]?.includes(year)).length;

    return [
        {
            month: 'January',
            start_date: january_start,
            end_date: january_end,
        },
        {
            month: 'February',
            start_date: february_start,
            end_date: february_end,
        },
        {
            month: 'March',
            start_date: march_start,
            end_date: march_end,
        },
        {
            month: 'April',
            start_date: april_start,
            end_date: april_end,
        },
        {
            month: 'May',
            start_date: may_start,
            end_date: may_end,
        },
        {
            month: 'June',
            start_date: june_start,
            end_date: june_end,
        },
        {
            month: 'July',
            start_date: july_start,
            end_date: july_end,
        },
        {
            month: 'August',
            start_date: august_start,
            end_date: august_end,
        },
        {
            month: 'September',
            start_date: september_start,
            end_date: september_end,
        },
        {
            month: 'October',
            start_date: october_start,
            end_date: october_end,
        },
        {
            month: 'November',
            start_date: november_start,
            end_date: november_end,
        },
        {
            month: 'December',
            start_date: december_start,
            end_date: december_end,
        },
    ];
};

export function monthStart({ data, startLabel }) {
    const now = new Date();
    const year = now.getFullYear();

    // Month to current year
    const january_start = data.filter((item: any) => item?.[startLabel]?.includes('Jan') && item?.[startLabel]?.includes(year)).length;
    const february_start = data.filter((item: any) => item?.[startLabel]?.includes('Feb') && item?.[startLabel]?.includes(year)).length;
    const march_start = data.filter((item: any) => item?.[startLabel]?.includes('Mar') && item?.[startLabel]?.includes(year)).length;
    const april_start = data.filter((item: any) => item?.[startLabel]?.includes('Apr') && item?.[startLabel]?.includes(year)).length;
    const may_start = data.filter((item: any) => item?.[startLabel]?.includes('May') && item?.[startLabel]?.includes(year)).length;
    const june_start = data.filter((item: any) => item?.[startLabel]?.includes('Jun') && item?.[startLabel]?.includes(year)).length;
    const july_start = data.filter((item: any) => item?.[startLabel]?.includes('Jul') && item?.[startLabel]?.includes(year)).length;
    const august_start = data.filter((item: any) => item?.[startLabel]?.includes('Aug') && item?.[startLabel]?.includes(year)).length;
    const september_start = data.filter((item: any) => item?.[startLabel]?.includes('Sep') && item?.[startLabel]?.includes(year)).length;
    const october_start = data.filter((item: any) => item?.[startLabel]?.includes('Oct') && item?.[startLabel]?.includes(year)).length;
    const november_start = data.filter((item: any) => item?.[startLabel]?.includes('Nov') && item?.[startLabel]?.includes(year)).length;
    const december_start = data.filter((item: any) => item?.[startLabel]?.includes('Dec') && item?.[startLabel]?.includes(year)).length;

    return [
        {
            month: 'January',
            date: january_start,
        },
        {
            month: 'February',
            date: february_start,
        },
        {
            month: 'March',
            date: march_start,
        },
        {
            month: 'April',
            date: april_start,
        },
        {
            month: 'May',
            date: may_start,
        },
        {
            month: 'June',
            date: june_start,
        },
        {
            month: 'July',
            date: july_start,
        },
        {
            month: 'August',
            date: august_start,
        },
        {
            month: 'September',
            date: september_start,
        },
        {
            month: 'October',
            date: october_start,
        },
        {
            month: 'November',
            date: november_start,
        },
        {
            month: 'December',
            date: december_start,
        },
    ];
};

export function filterYear(data: any) {
    const now = new Date();
    const year = now.getFullYear();

    return data.filter((item: any) => item?.date.includes(year) ?? '');
}