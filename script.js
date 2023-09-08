"use strict";

const dayOfTheWeek = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);

const UTCTime = document.querySelector('[data-testid="currentUTCTime"]');

function getCurrentDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getDay()];
  return currentDay;
}

// "currentDayOfTheWeek" Element
document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
).textContent = `Current Day of the Week :  ${getCurrentDayOfWeek()}`;

//////////////////////////
function getCurrentUTCTime() {
  const currentDate = new Date();
  const utcTimeString = currentDate.getTime();
  UTCTime.textContent = `Current UTC Time: ${utcTimeString}`;
  // return utcTimeString;
}
setInterval(getCurrentUTCTime, 1);

