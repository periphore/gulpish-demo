'use strict';

var now = new Date();

var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

var months = [
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
  'December'
];

var date = ((now.getDate() < 10) ? "0" : "") + now.getDate();

var today = days[now.getDay()] + ", " +
  months[now.getMonth()] + " " +
  date + ", " +
  (fourdigits(now.getYear()));

function fourdigits(number) {

  return (number < 1000) ? number + 1900 : number;

}

document.write(today);
