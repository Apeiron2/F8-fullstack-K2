const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const overlay = document.querySelector(".overlay");
const cancer = document.querySelector(".cancer");
// có thẻ xóa element bằng cách {tên element}.remove()
// cần lưu ý để ko bị nhầm khi remove class có thể thiếu classList và thành remove element

function active() {
  content.classList.toggle("active");
  overlay.classList.toggle("active");
}
btn.addEventListener("click", active);
overlay.addEventListener("click", active);
cancer.addEventListener("click", active);
