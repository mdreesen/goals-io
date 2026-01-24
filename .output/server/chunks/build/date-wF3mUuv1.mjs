import { format } from 'date-fns';

function timeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function formatDate() {
  return (/* @__PURE__ */ new Date()).toLocaleString("en-US", {
    timeZone: timeZone(),
    year: "numeric",
    month: "long",
    // 'numeric', '2-digit', 'short'
    day: "numeric",
    hour12: true
    // true for AM/PM, false for 24-hour
  });
}
function useFormatDate(date2) {
  return date2.toLocaleString("en-US", {
    timeZone: timeZone(),
    year: "numeric",
    month: "long",
    // 'numeric', '2-digit', 'short'
    day: "numeric",
    hour12: true
    // true for AM/PM, false for 24-hour
  });
}
function yearMonthDayFormat(date2) {
  const useDate = date2 || /* @__PURE__ */ new Date();
  const dateObject = new Date(useDate);
  const isMonth = format(dateObject, "MM");
  const isDay = format(dateObject, "dd");
  const isYear = format(dateObject, "yyyy");
  return {
    month: Number(isMonth),
    day: Number(isDay),
    year: Number(isYear)
  };
}

export { formatDate as f, timeZone as t, useFormatDate as u, yearMonthDayFormat as y };
//# sourceMappingURL=date-wF3mUuv1.mjs.map
