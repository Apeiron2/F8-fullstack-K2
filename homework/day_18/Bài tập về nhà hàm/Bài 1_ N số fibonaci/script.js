// Hiển thị N số Fibonaci đầu tiên

// Ví dụ: Gán n = 10 sẽ hiển thị danh sách 10 số fibonaci

// Yêu cầu: Không dùng vòng lặp

function fibonaci(n) {
  if (n == 1 || n == 2) return 1;
  return fibonaci(n - 1) + fibonaci(n - 2);
}

function arrayFibonaci(n, array) {
  if (n == 0) return;
  array[array.length] = fibonaci(n);
  return arrayFibonaci(n - 1, array);
}

document.getElementById("getNForm").addEventListener("submit", (event) => {
  event.preventDefault();
  var n = document.getElementById("getN").value;
  var array = [];
  arrayFibonaci(n, array);
  document.getElementById("show-result").innerText = array
    .sort((a, b) => {
      return a - b;
    })
    .join(" ");
});
