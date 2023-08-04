var a = prompt("Số thứ nhất:");
var b = prompt("Số thứ hai:");
var c = prompt("Số thứ ba:");
function sort(a, b, c) {
  if (a > b || b > c) {
    if (a > b) {
      a = +a + +b;
      b = a - b;
      a = a - b;
    }
    if (b > c) {
      b = +b + +c;
      c = b - c;
      b = b - c;
    }
    sort(a, b, c);
  } else document.write(a + " " + b + " " + c);
}
sort(a, b, c);
