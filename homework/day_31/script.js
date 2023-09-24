var container = document.querySelector(".container");
var time = container.querySelector(".time");
var getLinkBtn = container.querySelector("button");

time.innerHTML = 60;

// Đo framerate (frame/s)
var run = true;
var frameRate = 0;
var start = Date.now();
(function test() {
  if (Date.now() - start >= 1000) {
    run = false;
    return;
  }
  if (run) {
    frameRate++;
    console.log(frameRate);
    requestAnimationFrame(test);
  }
})();
// Đo framerate xong

// Hàm đếm ngược
function startCount() {
  function countSecond() {
    var frame = 0;
    function countFrame() {
      if (frame < frameRate) {
        frame++;
        requestAnimationFrame(countFrame);
      } else {
        if (+time.innerHTML > 0) {
          +time.innerHTML--;
          requestAnimationFrame(countSecond);
        } else {
          getLinkBtn.classList.add("active");
          getLinkBtn.addEventListener("click", function () {
            window.location.href =
              "https://www.facebook.com/vuductai.ED02.BKHN?locale=vi_VN";
          });
        }
      }
    }
    countFrame();
  }
  countSecond();
}
document.addEventListener("DOMContentLoaded", function () {
  startCount();
});
// End hàm đếm ngược
