var a = prompt("Số thứ nhất:");
var b = prompt("Số thứ hai:");
function checkVar(a, b) {
  if (a * b >= 0) {
    document.write("Cùng dấu");
  } else {
    document.write("Khác dấu");
  }
}
checkVar(a, b);
