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
