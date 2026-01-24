function years(data) {
  const years2 = data == null ? void 0 : data.map((item) => {
    const dates = (item == null ? void 0 : item.book_start_date) || (item == null ? void 0 : item.book_end_date) || (item == null ? void 0 : item.date);
    const date = new Date(dates);
    const year = date.getFullYear();
    return year;
  }).filter((item) => item);
  return [...new Set(years2.sort())].reverse();
}

export { years as y };
//# sourceMappingURL=getYears.mjs.map
