// for (var i = 1; i <= 10; i--) {
//   console.log(`Xin chào ${i}`);
// }

// for (var i = 10; i > 0; i -= 2) {
//   console.log(`Xin chào ${i}`);
// }

// // Bài tập 1: Tính giá trị biểu thứ: S= 1+2+3+..+n
// var n = 10;
// var total = 0;
// for (var i = 1; i <= n; i++) {
//   total += i;
// }
// console.log(total);

// // Bài tập 2: Tính toán tổng giai thừa: S= 1! + 2! + 3! +... +n!
// var n = 5;
// var total = 0;
// var supTotal = 1;
// for (var i = 1; i <= n; i++) {
//   supTotal *= i;
//   total += a;
// }
// console.log(supTotal);

// //Bài 3: Kiểm tra số nguyên tố
// var n = 17;
// var a = true;
// if (n < 1 || n % 1 != 0) {
//   a = false;
// } else {
//   for (var i = 2; i < n; i++) {
//     if (n % i == 0) {
//       a = false;
//       break;
//     }
//   }
// }
// if (a) console.log(`${n} là số nguyên tố`);
// else console.log(`${n} không phải số nguyên tố`);
// // Kỹ thuật đặt cờ hiệu

////break, continue
// var n = 17;
// var a = true;
// if (n < 1 || n % 1 != 0) {
//   a = false;
// } else {
//   for (var i = 2; i < n; i++) {
//     if (n % i == 0) {
//       a = false;
//       break;
//     }
//   }
// }

var a = 1;
var b = 9;
for (var i = a; i <= b; i++) {
  console.log(i);
  if (i === 5) continue;
  console.log(i);
}
