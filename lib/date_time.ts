import { DateTime, Settings } from "luxon";

export function date_today() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const dateTime = DateTime.local().setZone(timezone);

    return dateTime.toLocaleString();
};

export function date_time_today() {
    Settings.defaultZone = "system";

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const dateTime = DateTime.local().setZone(timezone);

    return dateTime.toLocaleString(DateTime.DATETIME_FULL);
};

export function current_year() {
    const currentYear = new Date().getFullYear().toString();

    return currentYear
};