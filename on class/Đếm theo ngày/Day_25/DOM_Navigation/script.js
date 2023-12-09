// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   console.log(this);
//   // Chọn thành phần cha của btn
//   console.log(this.parentElement.parentElement);
// });

// var menu = document.querySelector(".menu");
// console.log(Array.from(menu.children));
// console.log(menu.children[2].children[1].children[0].children[0].innerText);

//Bài tập: Click vào mỗi item trên menu và xử lý các trường hợp sau
/*
Nếu item đó có menu con (có ul) thì đổi màu nền menu con
Nếu item ko có menu con thì đổi màu chữ của item vừa click vào
 */

var List = document.querySelectorAll("a");

List.forEach(function (a) {
  a.addEventListener("click", function (event) {
    event.preventDefault();
    if (this.parentElement.children.length === 1) {
      if (this.style.color == "red") {
        this.style.color = "initial";
      } else this.style.color = "red";
    } else {
      if (this.parentElement.children[1].style.backgroundColor == "gray") {
        this.parentElement.children[1].style.backgroundColor = "initial";
      } else this.parentElement.children[1].style.backgroundColor = "gray";
    }
  });
});
