export function formatCurrency(number: number | string) {
  return `$${number}`
}

export function formatDateAndTime(date: any) {

  const convertDate = new Date(date)

  const converted = convertDate.toLocaleDateString()

  return converted.toString();
};

export function formatDateSpecific(date: Date) {
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export function formatSecondsToHHMMSS(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.round(totalSeconds % 60);

  // Pad with leading zeros if necessary
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export function bodyWeightToWaterInOz(data: any) {

  // If string, convert to number, then convert back to string
  const convertStringToNumber = Number(data);
  const convertWeightToWaterOz = convertStringToNumber / 2;
  const convertBackToString = convertWeightToWaterOz.toString();

  // If number, divide by 2, convert back to string
  const isNumberDivideByTwo = (data / 2).toString();

  switch (true) {
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

export function findHighestNumber(data: any) {

  const useData = data.length === 0 ? [0] : data;
  const highestNumber = Math.max(...useData);

  return highestNumber.toString();
};

export function findAverageNumber(data: any) {
  const sum = data.reduce((acc: any, current: any) => acc + current, 0);
  const average = sum / data.length || 0;

  const round = Math.round(average * 10) / 10
  return round.toString();
};

export function round(number: number) {
  const round = Math.round(number * 10) / 10;

  return round;
};

export function lossOrGain({ starting, current }: any) {
  const math = Number(starting) - Number(current);
  const round = Math.round(math * 10) / 10;
  return round.toString();
};

export function convertTimezone(data: any) {
  'use client'

  switch(true) {
    case data === 'EST':
      return 'New_York';
      break

    case data === 'CST':
      return 'Chicago';
      break

    case data === 'MST':
      return 'Denver';
      break
    
    case data === 'PST':
      return 'Los_Angeles';
      break

    default:
      return '';
  }
};

export function convertTimezoneReverse(data: any) {
  'use client'

  switch(true) {
    case data?.includes('New_York'):
      return 'EST';
      break

    case data?.includes('Chicago'):
      return 'CST';
      break

    case data?.includes('Denver'):
      return 'MST';
      break
    
    case data?.includes('Los_Angeles'):
      return 'PST';
      break

    default:
      return '';
  }
};