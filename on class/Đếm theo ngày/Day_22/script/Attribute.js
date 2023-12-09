var link = document.querySelector(".link");
link.href = "google.com";
link.title = "Trang chủ google";
console.log(link);
console.log(link.href);
console.log(link.title);
console.log(link.target);
console.log(link.className);

//Truy cập vào data attribute

console.log(link.getAttribute("data-index-number"));

//Truy cập vào dataset
console.log(link.dataset.indexNumber);

//Thay đổi dataset

link.setAttribute("data-index-number", 3);
console.log(link.dataset.indexNumber);

link.dataset.indexNumber = 10;

console.log(link.dataset.indexNumber);
