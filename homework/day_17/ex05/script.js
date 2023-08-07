// Vẽ tam giác số sau với N dòng

// 1

// 2 3

// 4 5 6

// 7 8 9 10

// 11 12 13 14 15
var endRow = (n) => {
  if (n == 1) {
    return 1;
  }
  return n + endRow(n - 1);
};
var row = (n) => {
  var string = "";
  var end = endRow(n);
  for (let i = end - n + 1; i <= end; i++) {
    string += i + " ";
  }
  return string;
};

document.getElementById("getNumberRow").addEventListener("submit", (event) => {
  event.preventDefault();
  var n = +document.getElementById("numberRow").value;
  var box = document.querySelector(".box");
  box.innerHTML = "";
  for (let i = 1; i <= n; i++) {
    box.innerHTML += `<p>${row(i)}</p>`;
  }
});
