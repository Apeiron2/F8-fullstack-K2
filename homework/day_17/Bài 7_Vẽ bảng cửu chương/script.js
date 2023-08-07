//Học viên sử dụng kiến thức đã học để vẽ bảng cửu chương từ 1 đến 10
var multiplication = (mulTable, n) => {
  for (var i = 1; i <= 10; i++) {
    mulTable.innerHTML += `<div>${n} x ${i} = ${n * i}</div>`;
  }
};

function createMulTables() {
  var mulTables = document.getElementById("multiplication");
  for (let i = 1; i <= 10; i++) {
    mulTables.innerHTML += `<div id="mul${i}"></div>`;
    var mulTable = document.getElementById(`mul${i}`);
    setStyleTable(mulTable);
    multiplication(mulTable, i);
  }
}

function setStyleTable(mulTable) {
  mulTable.style.display = "inline-block";
  mulTable.style.margin = "20px";
  mulTable.style.padding = "10px";
  mulTable.style.border = "1px solid black";
}
createMulTables();
