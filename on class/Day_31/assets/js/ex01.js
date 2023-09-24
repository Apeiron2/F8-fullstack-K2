var title = document.querySelector(".title");

HTMLElement.prototype.css = function (style) {
  Object.assign(this.style, style);
};

title.css({
  color: "red",
  fontSize: "120px",
});

//Custom Element
//Kỹ thuật tạo ra 1 thẻ HTML mới. Có hoạt động giống các thẻ HTML có sẵn nhưng khác chức năng nhiệm vụ

function HelloWorld() {
  return Reflect.construct(HTMLElement, [], HelloWorld);
}
HelloWorld.prototype = Object.create(HTMLElement.prototype);

//Vòng đời
HelloWorld.prototype.constructor = HelloWorld;
HelloWorld.prototype.connectedCallback = function () {
  this.innerText = "Xin chào F8";
};

customElements.define("hê-lô-wua", HelloWorld);
