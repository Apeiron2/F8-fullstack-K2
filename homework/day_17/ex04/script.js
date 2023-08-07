var checkNumber = (testNumber) => {
  var result = true;
  if (testNumber <= 1) result = false;
  else {
    for (i = 2; i <= Math.sqrt(testNumber); i++) {
      if (testNumber % i === 0) {
        result = false;
        break;
      }
    }
  }
  return result;
};

document.getElementById("getTestNumber").addEventListener("submit", (event) => {
  event.preventDefault();
  var n = +document.getElementById("testNumber").value;
  var result = (function (testNumber) {
    if (checkNumber(testNumber)) {
      return "Đây là số nguyên tố!";
    } else {
      return "Đây không phải số nguyên tố!";
    }
  })(n);
  document.getElementById("show-result").innerText = result;
});
