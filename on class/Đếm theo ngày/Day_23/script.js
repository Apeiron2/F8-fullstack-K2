var content = document.querySelector(".content");
content.style.display = "block";
content.style.width = "500px";
content.style.heigh = "500px";
content.style.color = "white";
content.style.fontSize = "48px";
content.style.backgroundColor = "blue";
content.style.textDecoration = "line-through";
content.style.fontStyle = "bold";
var link = "https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg";
content.style.backgroundImage = `url(${link})`;

var css = {
  backgroundColor: "grey",
  textDecoration: "line-through",
  fontStyle: "italic",
  backgroundImage: `url("${link}")`,
};

Object.assign(content.style, css);
//Thực hiện ghi đè các thuộc tính trong object css vào object content.style
