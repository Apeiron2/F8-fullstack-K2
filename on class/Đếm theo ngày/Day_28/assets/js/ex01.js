// Event DOMContentLoad => Hình thành cây DOM
document.addEventListener("DOMContentLoaded", function () {
  var title = document.querySelector(".title");
  console.log(title);
});

// Event load

window.addEventListener("load", function () {
  var loading = document.querySelector(".loading");
  loading.style.display = "none";
});
// Thường được sử dụng để làm chức năng loading

var img = document.querySelector("img");

var video = document.querySelector("video");
