function pow(a, n) {
  var result = 1;
  for (var i = 0; i < n; i++) {
    result *= a;
  }
  return result;
}

var S = 10 + 20 + pow(5, 10) / 2;
document.write(`S = ${S}`);
