// // Nếu kéo thanh cuộn xuống thì đổi màu nếu kéo lên thì reset

// var currentY = window.scrollY;

// window.addEventListener("scroll", function (e) {
//   console.log(window.scrollY - currentY);

//   if (window.scrollY - currentY < 0) {
//     document.body.style = "background:red";
//   } else {
//     document.body.style = "background:initial";
//   }
//   currentY = window.scrollY;
// });

//Xây dựng tính năng back-to-top

var topBtn = document.querySelector(".top");
topBtn.addEventListener("click", function () {
  window.scroll(0, 0);
});

window.addEventListener("scroll", function (e) {
  var y = window.scrollY;
  if (y > 2000) {
    topBtn.classList.add("show");
  } else topBtn.classList.remove("show");
});
