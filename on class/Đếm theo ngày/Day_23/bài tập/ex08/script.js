var content = document.querySelector(".content");
var btn = document.querySelector(".btn");
content.style.display = "block";

//
btn.addEventListener("click", function () {
  if (content.style.display == "block") {
    content.style.display = "none";
    btn.innerText = "Hiện";
  } else {
    content.style.display = "block";
    btn.innerText = "Ẩn";
  }
});
