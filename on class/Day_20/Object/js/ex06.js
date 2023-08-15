Array.prototype.map2 = function (fn) {
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    newArr.push(fn(this[i]));
  }
  return newArr;
};
var users = ["Item 1", "Item 2", "Item 3"];
var newArr = users.map2(function (user) {
  return `<h3>${user}</h3>`;
});
var newArr2 = users.map(function (user) {
  return `<h3>${user}</h3>`;
});
console.log(newArr);
console.log(newArr2);
