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

export function bodyWeightToWaterInOz(data: any) {

  // If string, convert to number, then convert back to string
  const convertStringToNumber = Number(data);
  const convertWeightToWaterOz = convertStringToNumber / 2;
  const convertBackToString = convertWeightToWaterOz.toString();

  // If number, divide by 2, convert back to string
  const isNumberDivideByTwo = (data / 2).toString();

  switch(true) {
    case typeof data === 'string':
      return convertBackToString;
      break
    default:
      return isNumberDivideByTwo
  }
};

export function parse(data: any) {
  return data && JSON?.parse(JSON?.stringify(data))
}
