var arr = ["Tuấn", "An", "Anh", "Dũng", "Dương"];
var variable = arr.findLast((element) => {
  if (element[0] === "A") return true;
});
console.log(variable);
