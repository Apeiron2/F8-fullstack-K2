// var a = 3.2;
// console.log(a, typeof a);

// // Kiểm tra 1 số nguyên
// var a = 1;
// if (Number.isInteger(a)) console.log("Đây là số nguyên");
// else console.log("Đây không phải là số nguyên");

// // Số NaN
// var a = 10;
// var b = Infinity;
// var c = a * b;
// if (typeof a === "number" && !Number.isNaN(a) && a !== Infinity) {
//   console.log(a);
// }

// //Ép kiểu số nguyên

// var a = "10.2";
// a = Number.parseInt(a);
// console.log(a, typeof a);

// // Ép kiểu số thực

// var a = "a";
// a = Number.parseFloat(a);
// console.log(a);

// // Ép kiểu số

// var a = "10.3";
// console.log(+a, typeof +a);

// //Chuổi số thành chuỗi

// var a = 10;
// a = "" + a;
// console.log(a, typeof a);

// //Lấy phần thập phân và làm tròn: toFixed()

// var a = 10.756;
// console.log(a.toFixed(0)); //Hàm trả về 1 chuỗi

//Định dạng số
var price = 12000000.234;
console.log(
  price.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })
);
