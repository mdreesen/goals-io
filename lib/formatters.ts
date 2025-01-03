export function formatCurrency(number: number | string) {
    return `$${number}`
}

export function removeSpacesAndCaps(str: string) {
    return str.replace(/\s/g, '').toLowerCase();
  }