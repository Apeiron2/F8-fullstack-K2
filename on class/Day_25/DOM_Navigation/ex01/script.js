var productActive = document.querySelector(".product .active");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");

var firstElement = productActive;
nextBtn.addEventListener("click", function () {
  var nextElement = productActive.nextElementSibling;
  if (nextElement === null) {
    nextElement = firstElement;
  }
  nextElement.classList.toggle("active");
  productActive.classList.toggle("active");
  productActive = nextElement;
});

var lastElement = productActive.parentElement.lastElementChild;
prevBtn.addEventListener("click", function () {
  var prevElement = productActive.previousElementSibling;
  if (!prevElement) {
    prevElement = lastElement;
  }
  prevElement.classList.toggle("active");
  productActive.classList.toggle("active");
  productActive = prevElement;
});
