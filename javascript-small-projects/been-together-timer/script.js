const firstDating = "4 August 2020";

const daysEl = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function countUp() {
  const firstDatingDate = new Date(firstDating);
  const currentDate = new Date();

  const diff = (currentDate - firstDatingDate) / 1000; // in seconds
  const days = Math.floor(diff / 3600 / 24);
  const hours = Math.floor(diff / 3600) % 24;
  const minutes = (Math.floor(diff / 60) % 24) % 60;
  const seconds = Math.floor(diff) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEL.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

// display two digits
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
countUp();

setInterval(countUp, 1000);
