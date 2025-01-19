// dateUtils.ts
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';

// Configure required plugins
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

// Core date manipulation
export const formatDate = (date, template)=> {
  return dayjs(date).format(template);
};

export const addToDate = (date, amount, unit) => {
  return dayjs(date).add(amount, unit).toDate();
};

export const subtractFromDate = (date, amount, unit) => {
  return dayjs(date).subtract(amount, unit).toDate();
};

export const startOfUnit = (date, unit) => {
  return dayjs(date).startOf(unit).toDate();
};

// Comparison
export const isDateBefore = (date1, date2) => {
  return dayjs(date1).isBefore(dayjs(date2));
};

export const isDateAfter = (date1, date2) => {
  return dayjs(date1).isAfter(dayjs(date2));
};

// Timezone
export const convertToTimezone = (date, tz) => {
  return dayjs(date).tz(tz).toDate();
};

// Validation
export const isValidDate = (date) => {
  return dayjs(date).isValid();
};

// Business logic
export const isBusinessDay = (date) => {
  const day = dayjs(date).day();
  return day !== 0 && day !== 6;
};

export const isHoliday = (date) => {
  // Your holiday logic here
  return false;
};

// Usage example:
const date = new Date();
const result = formatDate(
  startOfUnit(
    addToDate(date, 2, 'day'),
    'day'
  ),
  'YYYY-MM-DD'
);

if (isBusinessDay(date) && !isHoliday(date)) {
  // Do something
}