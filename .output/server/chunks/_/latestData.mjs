function latestData(number, data) {
  const reverseData = data.reverse();
  const startIndex = Math.max(reverseData.length - number, 0);
  return reverseData.slice(startIndex);
}

export { latestData as l };
//# sourceMappingURL=latestData.mjs.map
