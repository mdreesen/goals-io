import { DateTime, Settings } from "luxon";
import { fetchUser } from '@/actions/user';
import { parse } from '@/lib/formatters'

export async function date_today() {
    const user = await fetchUser();
    const useUser = parse(user);
    Settings.defaultZone = "system";

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const useTimeZone = useUser.time_zone ?? timezone;
    const dateTime = DateTime.local().setZone(useTimeZone);

    return dateTime.toLocaleString();
};

export async function date_time_today() {
    const useUser = await fetchUser()
    Settings.defaultZone = "system";

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const useTimeZone = useUser.time_zone ?? timezone;
    const dateTime = DateTime.local().setZone(useTimeZone);

    return dateTime.toLocaleString(DateTime.DATETIME_FULL);
};

export function current_year() {
    const currentYear = new Date().getFullYear().toString();

    return currentYear
};