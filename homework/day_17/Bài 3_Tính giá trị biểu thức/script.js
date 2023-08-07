var sum = (n) => {
  if (n == 0) {
    return 0;
  }
  return n * (n + 1) + sum(n - 1);
};

document.getElementById("getN").addEventListener("submit", (event) => {
  event.preventDefault();
  var n = +document.getElementById("n").value;
  var result = sum(n);
  document.getElementById(
    "show-result"
  ).innerText = `Giá trị của biểu thức là: ${result}`;
});
