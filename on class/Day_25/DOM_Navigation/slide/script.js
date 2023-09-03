var carousel = document.querySelector(".carousel");

var carouselInner = carousel.querySelector(".carousel-inner");
var carouselNav = carousel.querySelector(".carousel-nav");

var nextBtn = carousel.querySelector(".next");
var prevBtn = carousel.querySelector(".prev");

var carouselDots = carousel.querySelector(".carousel-dots");

var carouselItem = carouselInner.children;

var itemWidth = carouselInner.clientWidth;
var totalWidth = itemWidth * carouselItem.length;

//Cập nhật CSS cho carouselInner
carouselInner.style.width = `${totalWidth}px`;

// Chức năng dots

//Create dots
for (let i = 0; i < carouselItem.length; i++) {
  var dot = document.createElement("div");
  dot.classList.add("dot");
  dot.addEventListener("click", function () {
    position = i * itemWidth * -1;
    carouselInner.style.translate = `${position}px`;
  });
  carouselDots.appendChild(dot);
}
// End. Create dots

var dotFirst = carousel.querySelector(".dot");
dotFirst.style.background = "orange";
var dots = carouselDots.querySelectorAll(".dot");

//Gán sự kiện cho các dot
dots.forEach(function (dot) {
  dot.addEventListener("click", function () {
    dots.forEach(function (dot) {
      dot.style.background = "white";
    });
    this.style.background = "orange";
  });
});

var position = 0;

nextBtn.addEventListener("click", function () {
  if (Math.abs(position) < totalWidth - itemWidth) {
    position -= itemWidth;
    carouselInner.style.translate = `${position}px`;

    var nextDot = Math.abs(position) / itemWidth;
    dots[nextDot].style.background = "orange";
    dots[nextDot].previousElementSibling.style.background = "white";
  }
});
prevBtn.addEventListener("click", function () {
  if (position < 0) {
    position += itemWidth;
    carouselInner.style.translate = `${position}px`;

    var nextDot = Math.abs(position) / itemWidth;
    dots[nextDot].style.background = "orange";
    dots[nextDot].nextElementSibling.style.background = "white";
  }
});

var activeMove = false;
var current = 0;
var startMove = 0;
carouselInner.addEventListener("mousedown", function (e) {
  e.preventDefault();
  this.style.cursor = "move";
  activeMove = true;
  current = e.offsetX;
  startMove = e.clientX;
});
document.addEventListener("mousemove", function (e) {
  if (activeMove == true) {
    position += e.offsetX - current;
    current = e.offsetX;
    if (Math.abs(position) > totalWidth - itemWidth)
      position = itemWidth - totalWidth;

    if (position > 0) position = 0;

    carouselInner.style.translate = `${position}px`;
  }
});
document.addEventListener("mouseup", function (e) {
  carouselInner.style.cursor = "default";
  activeMove = false;
  var range = ((Math.abs(position) % itemWidth) / itemWidth) * 100;
  if (range <= 10 || range >= 90) {
    // Điều kiện vuốt sang phải
    if (e.clientX - startMove > 0)
      position = Math.floor(position / itemWidth) * itemWidth;
    else position = Math.ceil(position / itemWidth) * itemWidth;
  } else {
    if (e.clientX - startMove > 0)
      position = Math.ceil(position / itemWidth) * itemWidth;
    else position = Math.floor(position / itemWidth) * itemWidth;
  }
  carouselInner.style.translate = `${position}px`;
  dots.forEach(function (dot, i) {
    if (i == Math.abs(position) / itemWidth) {
      dot.style.background = "orange";
      return;
    }
    dots[i].style.background = "white";
  });
});
