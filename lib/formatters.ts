export function formatCurrency(number: number | string) {
  return `$${number}`
}

export function removeSpacesAndCaps(str: string) {
  return str.replace(/\s/g, '').toLowerCase();
};

export function formatDateAndTime(date: any) {

  const convertDate = new Date(date)

  const converted = convertDate.toLocaleDateString()

  return converted.toString();
};

export function convertWaterIntake(data: any) {
  const convertStringToNumber = Number(data.weight);

  // Need to convert weight into oz.
  // Rule of thumb is...
  // divide your body weight in half and drink that many ounces of water per day.
  const convertWeightToWaterOz = convertStringToNumber / 2;
  return convertWeightToWaterOz.toString();
};

export function parse(data: any) {
  return data && JSON?.parse(JSON?.stringify(data))
}
