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
var dots = carousel.querySelectorAll(".dot");

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
