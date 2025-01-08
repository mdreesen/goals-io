export function date_today() {
    const today = new Date().toLocaleString();

    return today
};

export function current_year() {
    const currentYear = new Date().getFullYear().toString();

    return currentYear
};