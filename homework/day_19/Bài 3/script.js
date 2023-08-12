document.getElementById("getArrayForm").addEventListener("submit", (event) => {
  event.preventDefault();
  var a = document.getElementById("getArray").value.split(" ");
  var content = filterOnly(a).join(" ");

  document.getElementById("show-result").innerText = content;
});

function filterOnly(a) {
  var newArray = [];
  a.forEach((element) => {
    if (!newArray.includes(element)) newArray[newArray.length] = element;
  });
  return newArray;
}
