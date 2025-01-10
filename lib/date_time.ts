import { DateTime } from "luxon";

export function date_today() {
    const dateTime = DateTime.local();

    return dateTime.toLocaleString()
};

export function current_year() {
    const currentYear = new Date().getFullYear().toString();

    return currentYear
};