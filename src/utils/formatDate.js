const EN_LOCALE = 'en-US';

export function formatDate(date, timeZone) {
  const formatter = Intl.DateTimeFormat(EN_LOCALE, {
    timeZone: timeZone,
    month: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return formatter(date);
}
