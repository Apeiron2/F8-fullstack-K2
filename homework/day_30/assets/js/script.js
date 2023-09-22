var container = document.querySelector(".container");

//Control
var control = container.querySelector(".control");
var typeDropdown = control.querySelector(".type-dropdown");
var dropDownBtn = control.querySelector(".menu-dropdown button");

//Style Button
var botlBtn = control.querySelector("button.bold");
var italicBtn = control.querySelector("button.italic");
var underlineBtn = control.querySelector("button.underline");
var colorBtn = control.querySelector("input[type='color']");

//Content
var content = container.querySelector(".content");
content.innerText = localStorage.getItem(`text`);

//Counter
var counter = container.querySelector(".counter");
var countLetter = counter.querySelector(".letters span");
var countWord = counter.querySelector(".words span");

// new & download
var newBtn = typeDropdown.querySelector(".new-file");
var txtBtn = typeDropdown.querySelector(".txt-file");
var pdfBtn = typeDropdown.querySelector(".pdf-file");

//Event Menu Dropdown
dropDownBtn.addEventListener("click", function () {
  typeDropdown.classList.toggle("show");
});

dropDownBtn.addEventListener("blur", function () {
  typeDropdown.classList.remove("show");
});
// End menu dropdown

//Event counter
content.addEventListener("input", function () {
  var words = this.innerText.trim().split(" ");
  countLetter.innerText = words.join("").length;
  countWord.innerText = words[0] !== "" ? words.length : 0;
});
//End counter

//Event font style
botlBtn.addEventListener("click", function () {
  document.execCommand("bold", false, null);
});
italicBtn.addEventListener("click", function () {
  document.execCommand("italic", false, null);
});
underlineBtn.addEventListener("click", function () {
  document.execCommand("underline", false, null);
});
colorBtn.addEventListener("input", function (e) {
  var color = e.target.value;
  document.execCommand("foreColor", false, color);
});
//End font style
