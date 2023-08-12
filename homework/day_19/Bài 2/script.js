var checkNumber = (array) => {
  var check = array.every((element) => {
    if (!isNaN(+element) && +element % 1 == 0) return true;
    return false;
  });
  return check;
};
var isPrime = (n) => {
  if (n < 2) return false;
  else if (n <= 3) return true;
  else if (n % 2 == 0 || n % 3 == 0) return false;
  else {
    for (let i = 5; i * i < n; i += 6) {
      if (n % i == 0) return false;
    }
    return true;
  }
};
var filterPrime = (array) => {
  var newArray = [];
  newArray = array.filter((element) => {
    if (element != "" && isPrime(element)) return true;
  });
  return newArray;
};

document.getElementById("getArrayForm").addEventListener("submit", (event) => {
  event.preventDefault();
  var array = document.getElementById("getArray").value.trim().split(" ");
  var primeArray = filterPrime(array);
  if (checkNumber(primeArray)) {
    if (primeArray.length != 0) {
      var total = 0;
      for (let i = 0; i < primeArray.length; i++) {
        total += +primeArray[i];
      }
      content = `Tổng các số nguyên tố: ${total}`;
    } else content = "Không có số nguyên tố nào!";
  } else {
    content = "Chỉ nhập số nguyên!";
  }

  document.getElementById("show-result").innerText = content;
});
