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

function add(m, a) {
  if (+m < +a[0]) a.unshift(m);
  else if (+m > +a[a.length - 1]) a.push(m);
  else {
    for (let i = 0; i < a.length; i++) {
      if (+m >= +a[i] && +m < +a[i + 1]) {
        a = a.slice(0, i + 1).concat(m, a.slice(i + 1));
        break;
      }
    }
  }
  return a;
}
var A = [];
var content = "";
document.getElementById("getArrayForm").addEventListener("submit", (event) => {
  event.preventDefault();

  var arrayData = document.getElementById("getArray").value.split(" ");
  A = filterNumber(arrayData).sort((a, b) => {
    return a - b;
  });
  content = A.join(" ");
  if (checkNumber(A)) {
    document.getElementById("getNumberForm").style.visibility = "visible";
  } else {
    document.getElementById("getNumberForm").style.visibility = "hidden";
    content = " Chỉ nhập số nguyên!";
  }

  document.getElementById("show-result").innerText = content;
});

document.getElementById("getNumberForm").addEventListener("submit", (event) => {
  event.preventDefault();
  var n = document.getElementById("getN").value;

  if (isNaN(+n)) {
    content = "Chỉ nhập số nguyên";
  } else {
    A = add(n, A);
    content = A.join(" ");
  }
  document.getElementById("show-result").innerText = content;
});
