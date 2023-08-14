var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function flat(a) {
  var check = a.every((element) => {
    if (Array.isArray(element)) return false;
    return true;
  });
  if (check) {
    return a;
  } else {
    return flat(flatArray(a));
  }
}
function flatArray(a) {
  var newArray = [];
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      for (let j = 0; j < a[i].length; j++) {
        newArray.push(a[i][j]);
      }
    } else newArray.push(a[i]);
  }
  return newArray;
}
console.log(flat(arr));
