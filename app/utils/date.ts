export function date() {
    return new Date().toISOString();
};

export function formatDate() {
    return new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long', // 'numeric', '2-digit', 'short'
      day: 'numeric',
      hour12: true // true for AM/PM, false for 24-hour
    });
  };

  export function timeZone() {
    return  Intl.DateTimeFormat().resolvedOptions().timeZone;
  }