# Expression Function

Việc gán 1 hàm không tên vào 1 biến
Var a = function(){
return "F8"
}
console.log(a()) ==> F8

function cũng là 1 kiểu dữ liệu typeof a === "function"

## chia sẻ dữ liệu ( 1 function có nhiều tên)

var a = function (name) {
console.log(`Apeiron: ${name}`);
};

var b = a;
b("Tai"); --> Apeiron: Tai

# IIFE

(function (name){
console.log("Test" + name);
})(name)

--> Hàm sẽ được chạy luôn

# Callback

var getA = function (a) {
console.log("getA");
if (typeof a === "function") {
a();
}
};
var getB = function () {
console.log("getB");
};
getA(getB); // Gọi hàm theo kiểu Callback --> Xử lý bất đồng bộ

() cách gọi hàm chủ động, nếu chỉ gọi tên thì là gọi hàm bị động
nếu để getA(getB()) thì getB sẽ chạy trước

var getA = function (a, ...args) {
console.log("getA");
if (typeof a === "function") {
a(...args);
}
};
getA(
function (name, mail) {
console.log("getB " + name + mail);
},
"F8",
"@gmail.com"
);

# SetTimeOut, SetInterval

setTimeout(
(name, email) => {
console.log(name + email);
},
1000,
"apeironisme",
"@gmail.com"
);
var count = 0;
var id = setInterval(() => {
console.log(++count);
if (count === 10) clearInterval(id);
}, 1000);

# closure

--> return lại 1 hàm (tái sử dụng dữ liệu)

var sum = function (a) {
return function (b) {
return a + b;
};
};
var add = sum(10);
var result1 = add(20);
console.log(`Result 1: ${result1}`);
var result2 = add(30);
console.log(`Result 2: ${result2}`);

# đệ quy
