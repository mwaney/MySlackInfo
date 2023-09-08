document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  getCurrentTime();
});

const fetchData = () => {
  const data = {
    slackUserName: "edu",
    slackDisplayImage:
      "https://ca.slack-edge.com/T05FFAA91JP-U05R7BLPFQD-f5734170931c-512",
    currentDayOfTheWeek: getWeekDay(),
    myTrack: "Frontend",
    githubURL: "https://github.com/mwaney/MySlackInfo",
  };

  document.querySelector("[data-testid='slackUserName']").textContent =
    data.slackUserName;
  document
    .querySelector("[data-testid='slackDisplayImage']")
    .setAttribute("src", data.slackDisplayImage);
  document
    .querySelector("[data-testid='slackDisplayImage']")
    .setAttribute("alt", data.slackUserName);
  document.querySelector("[data-testid='currentDayOfTheWeek']").textContent =
    data.currentDayOfTheWeek;
  document.querySelector("[data-testid='myTrack']").textContent = data.myTrack;
  document.querySelector("[data-testid='githubURL']").textContent =
    data.githubURL;
  document
    .querySelector("[data-testid='githubURL']")
    .setAttribute("href", data.githubURL);
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
    const hour = date.getUTCHours().toString().padStart(2, "0");
    const minute = date.getUTCMinutes().toString().padStart(2, "0");
    const second = date.getUTCSeconds().toString().padStart(2, "0");

    const time = `${hour}:${minute}:${second}`;
    document.querySelector("[data-testid='currentUTCTime']").textContent = time;
  }, 1000);
}
