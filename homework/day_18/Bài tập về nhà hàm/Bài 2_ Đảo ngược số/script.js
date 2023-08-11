// Viết hàm đảo ngược số nguyên với tham số là số cần đảo ngược

// Ví dụ: Khi gọi hàm và truyền đối số 12345 sẽ trả về kết quả 54321

document.getElementById("getNForm").addEventListener("submit", (event) => {
  event.preventDefault();
  var n = document.getElementById("getN").value;
  document.getElementById("show-result").innerText =
    "Số đảo ngược: " + n.split("").reverse().join("");
});
