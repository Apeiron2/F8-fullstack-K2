//Học viên sử dụng kiến thức đã học về vòng lặp, câu lệnh rẽ nhánh để vẽ bàn cờ vua
var chessTable = (color1, color2, size) => {
  var colorCode = (n) => {
    if (n === 1) return color1;
    else return color2;
  };

  var table = document.querySelector(".chessTable");
  setStyleTable(table);

  for (var i = 1; i <= 8; i++) {
    var code = (-1) ** i;
    table.innerHTML += `<div></div>`;

    var row = document.querySelector(`.chessTable>div:nth-child(${i})`);
    row.style.lineHeight = 0;

    for (var j = 1; j <= 8; j++) {
      row.innerHTML += `<div></div>`;
      var currentElement = document.querySelector(
        `.chessTable>div:nth-child(${i})>div:nth-child(${j}) `
      );
      code *= -1;
      setStyleElement(currentElement, colorCode(code), size);
    }
  }
};
function setStyleTable(table) {
  table.style.width = "fit-content";
  table.style.height = "fit-content";
  table.style.border = "2px solid black";
}
function setStyleElement(element, color, size) {
  element.style.backgroundColor = color;
  element.style.display = "inline-block";
  element.style.width = size;
  element.style.height = size;
}
chessTable("white", "black", "5vw");
