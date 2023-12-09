var slider = document.querySelector(".slider");
var slider2 = document.querySelector(".slider2");
var msg = document.querySelector(".msg");

// // slider.addEventListener("change", function (e) {
// //   console.log(this.value);
// // });

// slider.addEventListener("input", function (e) {
//   if (this.value == 100) slider.dispatchEvent(finishEvent);
//   else msg.classList.remove("active");
// });

// var finishEvent = new Event("finish");
// console.log(finishEvent);

// slider.addEventListener("finish", function () {
//   msg.classList.add("active");
// });

slider.addEventListener("over", function (e) {
  console.log(e);
});

slider2.addEventListener("over", function (e) {
  console.log(this.data);
});
