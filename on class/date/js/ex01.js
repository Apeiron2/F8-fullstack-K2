// const dateStr = "2023-10-21 21:07:00";
// const dateObj = new Date(dateStr);
// console.log(dateObj.getMonth());

const clock = document.querySelector(".clock");

const handleClock = () => {
  const today = new Date();
  const hours = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  clock.querySelector(".hour").innerHTML = hours < 10 ? `0${hours}` : hours;
  clock.querySelector(".minute").innerHTML =
    minute < 10 ? `0${minute}` : minute;
  clock.querySelector(".second").innerHTML =
    second < 10 ? `0${second}` : second;
};
setInterval(() => {
  handleClock();
}, 1000);

const getTime = (time) => {
  return time < 10 ? `0${time}` : time;
};
const deadline = new Date("2023-10-21 23:59:59");

const countDown = document.querySelector(".count-down");
const dateEL = countDown.querySelector(".date");
const hourEL = countDown.querySelector(".hour");
const minuteEL = countDown.querySelector(".minute");
const secondEL = countDown.querySelector(".second");

const handleCountDown = () => {
  const today = new Date();
  let countDownTime = deadline - today;
  countDownTime = new Date(countDownTime);
  console.log(countDownTime);
  dateEL.innerHTML = getTime(countDownTime.getDate() - 1);
  hourEL.innerHTML = getTime(countDownTime.getHours());
  minuteEL.innerHTML = getTime(countDownTime.getMinutes());
  secondEL.innerHTML = getTime(countDownTime.getSeconds());
};
setInterval(() => {
  handleCountDown();
}, 1000);
