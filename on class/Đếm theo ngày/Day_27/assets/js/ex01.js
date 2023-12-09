var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
var h1 = document.querySelector("h1");

h1.addEventListener("click", function () {
  this.style.color = "red";
});

var ul = document.createElement("ul");
for (var i = 1; i <= 3; i++) {
  var li = document.createElement("li");
  li.innerText = `Item ${i}`;
  ul.append(li);
}
content.append(ul);

btn.addEventListener("click", function () {
  var p = document.createElement("p");
  p.innerText = "Hello F8";
  content.replaceChild(p, ul);
  setTimeout(() => {
    content.removeChild(p);
  }, 1000);
});

// Xóa 1 node con
