var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

function union(a, b) {
  if (a.length < b.length) {
    var arrayA = filterOnly(a);
    var arrayB = filterOnly(b);
  } else {
    var arrayA = filterOnly(b);
    var arrayB = filterOnly(a);
  }
  var arrOnion = [];
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayB.includes(arrayA[i])) {
      arrOnion.push(arrayA[i]);
    }
  }
  return arrOnion;
}

function filterOnly(a) {
  var newArray = [];
  a.forEach((element) => {
    if (!newArray.includes(element)) newArray[newArray.length] = element;
  });
  return newArray;
}

console.log(union(arrA, arrB));
