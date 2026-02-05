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

export { formatDate as f, timeZone as t };
//# sourceMappingURL=date-DqBAJ_np.mjs.map
