// var a = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };

// var b = JSON.parse(JSON.stringify(a));

// b.name = "Hoàng An F8";

// console.log(a);
// console.log(b);

// var a = "1, 2, 3";
// if (a?.length) {
//   a.forEach?.(function (item) {
//     console.log(item);
//   });
// }

var a = { name: "An", age: 31 };
var b = { name: "An", age: 31 };
console.log(a);
console.log(JSON.stringify(a) === JSON.stringify(b));
