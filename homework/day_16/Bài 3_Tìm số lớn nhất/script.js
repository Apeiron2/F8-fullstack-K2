var a = +prompt("Số thứ nhất:");
var b = +prompt("Số thứ hai:");
var c = +prompt("Số thứ ba:");
function max(a, b, c) {
  var max = a;
  if (b >= max) max = b;
  if (c >= max) max = c;
  return max;
}
document.write(max(a, b, c));
