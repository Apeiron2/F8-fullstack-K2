var a = +prompt("Nhập số a:");
var b = +prompt("Nhập số b:");

function swap(a, b) {
  document.write("a = " + a);
  document.write("<br>");
  document.write("b = " + b);
  document.write("<br>");
  a = +a + +b;
  b = a - b;
  a = a - b;
  document.write("Hậu swap:");
  document.write("<br>");
  document.write("a = " + a);
  document.write("<br>");
  document.write("b = " + b);
  document.write("<br>");
}
swap(a, b);
