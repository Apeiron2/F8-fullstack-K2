var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var types = [];
for (let i = 0; i < arr.length; i++) {
  if (types.includes(typeof arr[i])) types.push(typeof arr[i]);
}
