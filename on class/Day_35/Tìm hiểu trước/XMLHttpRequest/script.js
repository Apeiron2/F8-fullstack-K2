const container = document.querySelector(".container");
const p = document.querySelector("p");

// Tạo 1 request
const xhr = new XMLHttpRequest();
const url = `https://jsonplaceholder.typicode.com/posts`;

// Bắt sự chuyển đổi của readyState
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    p.innerText = xhr.response;
  }
};

// Gửi request
xhr.open("GET", url, true);
xhr.send();

xhr.addEventListener("loadstart", function (e) {
  console.log(e);
});
xhr.addEventListener("loadend", function (e) {
  console.log(e);
});
xhr.addEventListener("load", function (e) {
  console.log(e);
});
