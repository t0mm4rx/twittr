const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function formatTimestamp(timestamp) {
  let date = new Date(timestamp);
  let str = '';
  str += days[date.getDay()];
  str += ' ';
  str += date.getDate();
  str += ' ';
  str += months[date.getMonth()];
  str += ' ';
  str += date.getFullYear();
  str += ' ';
  str += date.getHours();
  str += ':';
  str += date.getMinutes();
  return str;
}
