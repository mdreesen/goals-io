import { DateTime, Settings } from "luxon";
import { fetchUser } from '@/actions/user';
import { parse } from '@/lib/formatters'

export async function date_today() {
    const user = await fetchUser();
    const useUser = parse(user);
    Settings.defaultZone = "system";

    // Time zones
    const useZone = DateTime.local().zoneName;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const useTimeZone = useUser.time_zone ?? useZone;
    const dateTime = DateTime.local().setZone(useTimeZone);

    return dateTime.toLocaleString();
};

export async function date_time_today() {
    const useUser = await fetchUser()
    Settings.defaultZone = "system";

    // Time zones
    const useZone = DateTime.local().zoneName;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const useTimeZone = useUser.time_zone ?? useZone;


    const dateTime = DateTime.local().setZone(useTimeZone);

    return dateTime.toLocaleString(DateTime.DATETIME_FULL);
};

export async function date_time_fasting() {
    const useUser = await fetchUser()
    Settings.defaultZone = "system";

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const useTimeZone = useUser.time_zone ?? timezone;
    const dateTime = DateTime.local().setZone(useTimeZone);

    const futureTime = dateTime.plus({ hours: 16 });

    return futureTime.toISO();
};

export function current_year() {
    const currentYear = new Date().getFullYear().toString();

    return currentYear
};