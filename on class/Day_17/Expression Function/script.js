// // // // var add = function (a, b) {
// // // //   return a + b;
// // // // };
// // // // // console.log(add(5, 10));
// // // // var minus = (a, b) => {
// // // //   return a - b;
// // // // };

// // // // var sum = function () {
// // // //   var s = 0;
// // // //   console.log(arguments);
// // // // };
// // // // sum(5, 10, 20, 30);
// // // // // arguments không hoạt đọng trong arrow function (ES6)

// // // // //rest parameter --> Lấy các tham số còn lại (...args)
// // // // var getTotal = function (msg, ...args) {
// // // //   console.log(msg);
// // // //   console.log(args);
// // // // };
// // // // getTotal("Tổng = ", 5, 10, 15, 20);

// // // var a = function (name) {
// // //   console.log(`Apeiron: ${name}`);
// // // };

// // // var b = a;
// // // b("Tai");

// // var getA = function (a) {
// //   console.log("getA");
// //   if (typeof a === "function") {
// //     a();
// //   }
// // };
// // var getB = function (name) {
// //   console.log("getB " + name);
// // };
// // var callGetB = function () {
// //   getB("F8");
// // };
// // getA(callGetB); // Gọi hàm theo kiểu Callback
// // getA(() => {
// //   console.log("getB");
// // }); // Cách thường dùng hơn

// var getA = function (a, ...args) {
//   console.log("getA");
//   if (typeof a === "function") {
//     a(...args);
//   }
// };
// getA(
//   function (name, mail) {
//     console.log("getB " + name + mail);
//   },
//   "F8",
//   "@gmail.com"
// );
// setTimeout(
//   (name, email) => {
//     console.log(name + email);
//   },
//   1000,
//   "apeironisme",
//   "@gmail.com"
// );
// var count = 60;
// var id = setInterval(() => {
//   console.log(--count);
//   if (count === 0) clearInterval(id);
// }, 1000);
// var sum = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };
// var add = sum(10);
// var result1 = add(20);
// console.log(`Result 1: ${result1}`);
// var result2 = add(30);
// console.log(`Result 2: ${result2}`);

// var showNumber = function (n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };
// showNumber(10);

// //Tính giá trị S=1+2+3...+n

// var total = (n) => {
//   if (n === 1) {
//     return 1;
//   }
//   return (n += total(n - 1));
// };
// console.log(total(10));

//In ra dãy n số fibonacci

var fibonacci = (n) => {
  if (n === 1 || n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(2));
