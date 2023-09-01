var btn = document.querySelector(".btn");
var box = document.querySelector(".box");
var isDown = false;
var offsetX = 0;
var offsetY = 0;
btn.addEventListener("mousedown", function (e) {
  if (e.button == 0) {
    isDown = true;
    btn.style.position = "absolute";
    btn.style.cursor = "move";
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  }
});

document.addEventListener("mousemove", function (e) {
  if (isDown) {
    btn.style.left = e.clientX - offsetX + "px";
    btn.style.top = e.clientY - offsetY + "px";
  }
});
document.addEventListener("mouseup", function (e) {
  isDown = false;
  var checkX =
    e.clientX - offsetX >= box.style.left &&
    e.clientX - offsetX <= box.style.left + box.style.width;
  var checkY =
    e.clientY - offsetY >= box.style.top &&
    e.clientY - offsetY <= box.style.top + box.style.heigh;
  if (checkX && checkY) {
    btn.style.left = box.style.left + "px";
    btn.style.top = box.style.top + "px";
  }
  console.log(box.style);
});

console.log(btn.style.left);
