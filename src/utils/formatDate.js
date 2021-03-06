const EN_LOCALE = 'en-US';

export function formatDate(date, timeZone) {
  const formatter = Intl.DateTimeFormat(EN_LOCALE, {
    timeZone: timeZone,
    day: 'numeric',
    month: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  return formatter.format(date);
}
