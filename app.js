document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  getCurrentTime();
});

const fetchData = () => {
  const data = {
    currentDayOfTheWeek: getWeekDay(),
  };

  document.querySelector(
    "[data-testid='currentDayOfTheWeek']"
  ).textContent = `Day: ${data.currentDayOfTheWeek}`;
};

function getWeekDay() {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayNumber = new Date().getDay();
  return weekDays[dayNumber];
}

function getCurrentTime() {
  setInterval(() => {
    const date = new Date();
    const options = { timezone: "Africa/Nairobi" };
    const time = date.toLocaleTimeString("en-Us", options);
    const milliseconds = date.getTime();

    document.querySelector(
      "[data-testid='currentUTCTime']"
    ).textContent = `Local Time: ${time} | UTC Milliseconds: ${milliseconds}`;
  }, 1000);
}
