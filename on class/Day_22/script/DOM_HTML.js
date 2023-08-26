var content = document.querySelector(".content");

var result = document.querySelector(".result");

var btn = document.querySelector(".btn");

var count = +document.querySelector(".count").innerText;

function change() {
  count++;
  if (content.innerHTML === "") {
    btn.querySelector("span").innerText = "Lên";
    content.innerHTML = result.innerHTML;
    result.innerHTML = "";
  } else {
    btn.querySelector("span").innerText = "Xuống";
    result.innerHTML = content.innerHTML;
    content.innerHTML = "";
  }
  btn.querySelector(".count").innerText = count;
}

btn.addEventListener("click", change);
