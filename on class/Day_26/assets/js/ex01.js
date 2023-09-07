var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var isDrag = false;
var progressBarWidth = progressBar.clientWidth;
var position;
var initialValue;
var moveWidth;
var value;

var handleUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};
var getTime = function (seconds) {
  var minute = Math.floor(seconds / 60);
  var seconds = Math.floor(seconds - minute * 60);
  return `${minute < 10 ? `0${minute}` : minute}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
function updateTime() {
  currentTimeShow.innerText = getTime(audio.currentTime);
  stillTimeShow.innerText = getTime(audio.duration - audio.currentTime);
  handleUpdateValue((audio.currentTime * 100) / durationTime);
}

progressBar.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    value = (e.offsetX / progressBarWidth) * 100;
    initialValue = value;
    position = e.clientX;
    handleUpdateValue(initialValue);
    isDrag = true;
    audio.removeEventListener("timeupdate", updateTime);
  }
});
progressBar.addEventListener("mouseup", function (e) {
  e.stopPropagation();
  if (isDrag) {
    audio.currentTime = (initialValue * durationTime) / 100;
    isDrag = false;
    audio.addEventListener("timeupdate", updateTime);
    previewTime.style.display = "none";
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  isDrag = true;
  position = e.clientX;
  audio.removeEventListener("timeupdate", updateTime);
});
progressSpan.addEventListener("mouseup", function (e) {
  e.stopPropagation();
  if (isDrag) {
    audio.currentTime = (initialValue * durationTime) / 100;
    isDrag = false;
    audio.addEventListener("timeupdate", updateTime);
  }
});
document.addEventListener("mousemove", function (e) {
  e.stopPropagation();
  if (isDrag) {
    moveWidth = ((e.clientX - position) / progressBarWidth) * 100;
    if (value + moveWidth > 100) initialValue = 100;
    else if (value + moveWidth < 0) initialValue = 0;
    else initialValue = value + moveWidth;
    handleUpdateValue(initialValue);
  }
});

document.addEventListener("mouseup", function (e) {
  e.stopPropagation();
  if (isDrag) {
    audio.addEventListener("timeupdate", updateTime);
    audio.currentTime = (initialValue * durationTime) / 100;
    value = initialValue;
    isDrag = false;
  }
});

//Xây dựng trình phát nhạc
var audio = document.querySelector("audio");
var player = document.querySelector(".player");
var playerBtn = player.querySelector(".player-btn");
var currentTimeShow = player.querySelector(".start");
var stillTimeShow = player.querySelector(".end");
var previewTime = progressBar.querySelector(".preview-time");
var durationTime;
var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;
var playBtnIcon = `<i class="fa-solid fa-play"></i>`;

audio.addEventListener("loadeddata", function (e) {
  durationTime = audio.duration;
  stillTimeShow.innerText = getTime(audio.duration);
});
audio.addEventListener("timeupdate", updateTime);

playerBtn.addEventListener("click", function (e) {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
  }
});

audio.addEventListener("ended", function () {
  audio.currentTime = 0;
  handleUpdateValue(0);
  updateTime();
  playerBtn.innerHTML = playBtnIcon;
});

progressBar.addEventListener("mousemove", function (e) {
  if (!isDrag) {
    previewTime.style.display = "block";
    var subTime = (e.offsetX / progressBarWidth) * audio.duration;
    previewTime.innerText = getTime(subTime);
    previewTime.style.left = `${e.offsetX}px`;
  }
});
progressBar.addEventListener("mouseleave", function () {
  previewTime.style.display = "none";
});
progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
  previewTime.style.display = "none";
});
