// Ví dụ: Số 4298 sẽ chuyển thành: Bốn ngàn hai trăm chín tám

// Ràng buộc: Số cần chuyển đổi có giá trị từ 0 đến 9999

var letterNumber = (n) => {
  switch (n) {
    case "0":
      return "không";
    case "1":
      return "một";
    case "2":
      return "hai";
    case "3":
      return "ba";
    case "4":
      return "bốn";
    case "5":
      return "năm";
    case "6":
      return "sáu";
    case "7":
      return "bảy";
    case "8":
      return "tám";
    case "9":
      return "chín";
    default:
      break;
  }
};
function changeLetterNumber(n) {
  var letter = "";
  var letters = n.split("");
  while (letters.length < 4) {
    letters.unshift("0");
  }
  //   Xét số hàng ngàn, trăm
  if (letters[0] != 0) {
    letter += `${letterNumber(letters[0])} ngàn `;
    letter += `${letterNumber(letters[1])} trăm `;
  } else {
    if (letters[1] != 0) {
      letter += `${letterNumber(letters[1])} trăm `;
    }
  }
  // Xét số hàng chục
  if (letters[2] == 1) letter += `mười `;
  else if (letters[2] != 0) {
    letter += `${letterNumber(letters[2])} mươi `;
  } else {
    if (letters[3] != 0 && (letters[0] != 0 || letters[1] != 0))
      letter += "lẻ ";
  }
  // Xét số hàng đơn vị
  if (letters[3] != 0) {
    letter += `${letterNumber(letters[3])} `;
  }

  return letter[0].toUpperCase() + letter.slice(1);
}
document.getElementById("getNForm").addEventListener("submit", (event) => {
  event.preventDefault();
  var n = document.getElementById("getN").value;
  document.getElementById("show-result").innerText = changeLetterNumber(n);
});
