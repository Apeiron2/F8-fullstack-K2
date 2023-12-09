// var a = 10;
// if (a >= 10) {
//   for (i = 0; i < 3; i++) {
//     console.log("F8");
//   }
// }

// // Tính lương thực nhận sau khi trừ thuế

// var total = 15000000;
// var tax;
// if (total > 0) {
//   if (total < 5000000) {
//     tax = 1;
//   } else if (total > 15000000) {
//     tax = 5;
//   } else tax = 3;
//   console.log(`Lương: ${(total * (100 - tax)) / 100}`);
// } else {
//   console.log("Làm gì có lương!");
// }

// var a = 4;
// switch (a) {
//   case 10:
//     console.log("Ten");
//     break;
//   case 1:
//     console.log("One");
//     break;
//   case 2:
//     console.log("Two");
//     break;
//   case 3:
//     console.log("Three");
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log("3<a<7");
//   default:
//     console.log("I don't know");
//     break;
// }
// var a = "delete";
// if (a === "insert" || a === "add" || a === "create") {
//   console.log("Thêm");
// } else if (a === "edit" || a === "update") {
//   console.log("Sửa");
// } else if (a === "delete" || a === "remove" || a === "destroy") {
//   console.log("Xóa");
// } else {
//   console.log("Danh sách");
// }
// Hiển thị số ngày trong 1 tháng
// Tháng 31 ngày: 1,3,5,7,8,10,12
// Tháng 30 ngày: 4,6,9,11
// Tháng 29 ngày: 2
// month = 11 => Tháng 11 có 30 ngày
// Yêu cầu tháng phải là số nguyên, từ 1 đến 12

var month = 13;
if (month % 1 === 0 && month >= 1 && month <= 12) {
  month = +month;
  var days;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    default:
      days = 29;
      break;
  }
  console.log(`Tháng ${month} có ${days} ngày `);
} else {
  console.log(`Làm gì có tháng ${month}`);
}
