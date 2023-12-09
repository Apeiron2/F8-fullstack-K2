var btn = document.querySelector(".btn");

// Event Handler
/*
Cách 1: gán thông qua DOM
 */

btn.onclick = function () {
  console.log("Đăng ký thành công!");
};

/* 
Cách 2: Thêm trực tiếp vào thẻ html

<button onclick=handle()></button>

--> Bên JS định nghĩa hàm handle
Ít sử dụng vì khá bất tiện
*/

// Cách tra cứu: tên thẻ tag + "tag event"

var email = document.querySelector(".email");
email.onchange = function () {
  console.log(email.value);
};
email.onkeyup = function (e) {
  console.log("Đang gõ: " + e.key);
};
email.onfocus = function () {
  console.log("Focus");
};
email.onblur = function () {
  console.log("Thoát input");
};
email.onpaste = function () {
  console.log("Bạn vừa paste");
};
email.oncopy = function () {
  console.log("Bạn vừa copy");
};
btn.onmousedown = function () {
  console.log("Bạn vừa bấm chuột");
};
