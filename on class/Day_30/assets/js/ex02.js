var header = document.querySelector(".header");

var menu = header.querySelector("nav");
var navHeight = menu.clientHeight;
var y = menu.offsetTop;
window.addEventListener("scroll", function () {
  if (window.scrollY >= y) {
    menu.classList.add("fixed");
    document.body.style.paddingTop = menu.clientHeight + "px";
  } else {
    menu.classList.remove("fixed");
    document.body.style.paddingTop = 0;
  }
});

var navItems = menu.children;

Array.from(navItems).forEach(function (navItem) {
  navItem.addEventListener("click", function (e) {
    e.preventDefault();
    var href = this.getAttribute("href");
    var section = document.querySelector(href);
    if (section) {
      window.scroll(0, section.offsetTop - navHeight);
    }
  });
});
