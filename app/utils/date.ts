export function date() {
    return new Date().toISOString();
};

export function timeZone() {
  return  Intl.DateTimeFormat().resolvedOptions().timeZone;
};

export function formatDate() {
    return new Date().toLocaleString('en-US', {
      timeZone: timeZone(),
      year: 'numeric',
      month: 'long', // 'numeric', '2-digit', 'short'
      day: 'numeric',
      hour12: true // true for AM/PM, false for 24-hour
    });
  };

  export function useFormatDate(date: any) {
    return date.toLocaleString('en-US', {
      timeZone: timeZone(),
      year: 'numeric',
      month: 'long', // 'numeric', '2-digit', 'short'
      day: 'numeric',
      hour12: true // true for AM/PM, false for 24-hour
    });
  };

