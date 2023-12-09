var a = [1, 2, 3, 4, 5];
var b = [1, 2];
// b["a"] = 1;
// b["b"] = 2;
// b["c"] = 3;
var c = a.unshift(b);
console.log(a);
console.log(b);
console.log(c);

Array.sort(function (a, b) {
  return a - b;
  //a-b => tăng dần
  //b-a => giảm dần
});
