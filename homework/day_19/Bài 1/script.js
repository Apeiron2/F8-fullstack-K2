var checkNumber = (array) => {
  var check = array.every((element) => {
    if (!isNaN(+element) && +element % 1 == 0) return true;
    return false;
  });
  return check;
};

var filterNumber = (array) => {
  var newArray = [];
  newArray = array.filter((element) => {
    if (element != "") return true;
  });
  return newArray;
};

document.getElementById("getArrayForm").addEventListener("submit", (event) => {
  event.preventDefault();
  var array = document.getElementById("getArray").value.trim().split(" ");
  var sortArray = filterNumber(array).sort((a, b) => {
    return a - b;
  });
  if (checkNumber(sortArray)) {
    content = `Số nhỏ nhất là: ${sortArray[0]} \n Số lớn nhất là: ${
      sortArray[sortArray.length - 1]
    }`;
  } else {
    content = "Chỉ nhập số nguyên!";
  }

  document.getElementById("show-result").innerText = content;
});
