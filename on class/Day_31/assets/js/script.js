//Trigger Event
// Tự kích hoạt 1 event mà không cần hành động của người dùng
// Có 2 cách trigger event

//1. DÙng các hàm có sẵn như: click(),submit() --> Nhược điểm ko đầy đủ hàm

//2. Dùng thông qua dispatchEvent()
var btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("hello world");
});

var contentEl = document.querySelector(".content");
var downloadBtn = document.querySelector(".download");

downloadBtn.addEventListener("click", function () {
  var content = contentEl.innerText;
  var blob = new Blob([content]);
  // Tạo URl từ blob

  var url = URL.createObjectURL(blob);
  console.log(url);
  var a = document.createElement("a");
  a.href = url;
  a.download = "hello.txt";
  a.click();
});

var quantity = document.querySelector(".quantity");
var input = quantity.querySelector("input");
var minus = input.previousElementSibling;
var plus = input.nextElementSibling;
var amount = document.querySelector(".amount");
var price = 12000;
var changeEvent = new Event("change");

plus.addEventListener("click", function () {
  input.value++;
  input.dispatchEvent(changeEvent);
});
minus.addEventListener("click", function () {
  if (input.value > +input.min) {
    input.value--;
  }
  input.dispatchEvent(changeEvent);
});

input.addEventListener("change", function () {
  amount.innerHTML = this.value * price;
});
