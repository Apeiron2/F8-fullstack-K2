var arr = [
  ["a", 1, true, null, [2, 3], undefined, { c: 5, d: 9 }],
  ["b", 2, false, { a: 1, b: 2 }, [4, 5, 6]],
  [5, null, { f: "a" }, [2, "j", "k", "l"]],
];

var TypesIn = function (arr) {
  var newArr = [];
  var types = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      var type = "";
      if (Array.isArray(arr[i][j])) {
        type = "Array";
      } else if (arr[i][j] === null) type = "null";
      else type = typeof arr[i][j];
      if (!types.includes(type)) {
        types.push(type);
        newArr[types.length - 1] = new Array();
      }
      newArr[types.indexOf(type)].push(arr[i][j]);
    }
  }
  return newArr;
};

console.log(TypesIn(arr));
