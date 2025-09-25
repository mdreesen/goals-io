function monthStartEnd({ data, startLabel, endLabel }) {
  const now = /* @__PURE__ */ new Date();
  const year = now.getFullYear();
  const january_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Jan")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const february_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Feb")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const march_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Mar")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const april_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Apr")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const may_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("May")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const june_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Jun")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const july_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Jul")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const august_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Aug")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const september_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Sep")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const october_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Oct")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const november_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Nov")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const december_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Dec")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const january_end = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[endLabel]) == null ? void 0 : _a.includes("Jan")) && ((_b = item == null ? void 0 : item[endLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const february_end = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[endLabel]) == null ? void 0 : _a.includes("Feb")) && ((_b = item == null ? void 0 : item[endLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const march_end = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[endLabel]) == null ? void 0 : _a.includes("Mar")) && ((_b = item == null ? void 0 : item[endLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const april_end = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[endLabel]) == null ? void 0 : _a.includes("Apr")) && ((_b = item == null ? void 0 : item[endLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const may_end = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[endLabel]) == null ? void 0 : _a.includes("May")) && ((_b = item == null ? void 0 : item[endLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const june_end = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[endLabel]) == null ? void 0 : _a.includes("Jun")) && ((_b = item == null ? void 0 : item[endLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const july_end = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[endLabel]) == null ? void 0 : _a.includes("Jul")) && ((_b = item == null ? void 0 : item[endLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const august_end = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[endLabel]) == null ? void 0 : _a.includes("Aug")) && ((_b = item == null ? void 0 : item[endLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const september_end = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[endLabel]) == null ? void 0 : _a.includes("Sep")) && ((_b = item == null ? void 0 : item[endLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const october_end = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[endLabel]) == null ? void 0 : _a.includes("Oct")) && ((_b = item == null ? void 0 : item[endLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const november_end = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[endLabel]) == null ? void 0 : _a.includes("Nov")) && ((_b = item == null ? void 0 : item[endLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const december_end = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[endLabel]) == null ? void 0 : _a.includes("Dec")) && ((_b = item == null ? void 0 : item[endLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  return [
    {
      month: "January",
      start_date: january_start,
      end_date: january_end
    },
    {
      month: "February",
      start_date: february_start,
      end_date: february_end
    },
    {
      month: "March",
      start_date: march_start,
      end_date: march_end
    },
    {
      month: "April",
      start_date: april_start,
      end_date: april_end
    },
    {
      month: "May",
      start_date: may_start,
      end_date: may_end
    },
    {
      month: "June",
      start_date: june_start,
      end_date: june_end
    },
    {
      month: "July",
      start_date: july_start,
      end_date: july_end
    },
    {
      month: "August",
      start_date: august_start,
      end_date: august_end
    },
    {
      month: "September",
      start_date: september_start,
      end_date: september_end
    },
    {
      month: "October",
      start_date: october_start,
      end_date: october_end
    },
    {
      month: "November",
      start_date: november_start,
      end_date: november_end
    },
    {
      month: "December",
      start_date: december_start,
      end_date: december_end
    }
  ];
}
function monthStart({ data, startLabel }) {
  const now = /* @__PURE__ */ new Date();
  const year = now.getFullYear();
  const january_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Jan")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const february_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Feb")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const march_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Mar")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const april_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Apr")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const may_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("May")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const june_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Jun")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const july_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Jul")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const august_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Aug")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const september_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Sep")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const october_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Oct")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const november_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Nov")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  const december_start = data.filter((item) => {
    var _a, _b;
    return ((_a = item == null ? void 0 : item[startLabel]) == null ? void 0 : _a.includes("Dec")) && ((_b = item == null ? void 0 : item[startLabel]) == null ? void 0 : _b.includes(year));
  }).length;
  return [
    {
      month: "January",
      date: january_start
    },
    {
      month: "February",
      date: february_start
    },
    {
      month: "March",
      date: march_start
    },
    {
      month: "April",
      date: april_start
    },
    {
      month: "May",
      date: may_start
    },
    {
      month: "June",
      date: june_start
    },
    {
      month: "July",
      date: july_start
    },
    {
      month: "August",
      date: august_start
    },
    {
      month: "September",
      date: september_start
    },
    {
      month: "October",
      date: october_start
    },
    {
      month: "November",
      date: november_start
    },
    {
      month: "December",
      date: december_start
    }
  ];
}

export { monthStart as a, monthStartEnd as m };
//# sourceMappingURL=months.mjs.map
