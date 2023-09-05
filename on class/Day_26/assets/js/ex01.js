var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var isDrag = false;
var progressBarWidth = progressBar.clientWidth;
var position;
var initialValue;
var moveWidth;
progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    value = (e.offsetX / progressBarWidth) * 100;
    initialValue = value;
    position = e.clientX;
    handleUpdateValue(value);
    isDrag = true;
  }
});

var handleUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  isDrag = true;
  position = e.clientX;
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    moveWidth = ((e.clientX - position) / progressBarWidth) * 100;
    console.log(moveWidth);
    if (value + moveWidth > 100) initialValue = 100;
    else if (value + moveWidth < 0) initialValue = 0;
    else initialValue = value + moveWidth;
    handleUpdateValue(initialValue);
  }
});
document.addEventListener("mouseup", function (e) {
  isDrag = false;
  value = initialValue;
});
