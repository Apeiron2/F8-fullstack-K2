var total = (n) => {
  if (n === 1) {
    return 1;
  }
  return 1 / n + total(n - 1);
};
document.getElementById("getN").addEventListener("submit", (event) => {
  event.preventDefault();
  var n = +document.getElementById("N").value;
  var result = total(n);
  document.getElementById(
    "show-result"
  ).innerText = `Giá trị của biểu thức là: ${result}`;
});
