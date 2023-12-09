//Tạo shadow DOM

// var title = document.querySelector(".title");
// var root = title.attachShadow({
//   mode: "open",
// });
// root.innerHTML = `<p>F8-Vũ Tài</p>`;
// console.log(root);

var component = {
  create: function (name, handle) {
    function BaseComponent() {
      return Reflect.construct(HTMLElement, [], BaseComponent);
    }
    BaseComponent.prototype = Object.create(HTMLElement.prototype);
    BaseComponent.prototype.constructor = BaseComponent;
    BaseComponent.prototype.connectedCallback = handle;
    customElements.define(name, BaseComponent);
  },
};

component.create("todo-item", function () {
  var shadow = this.attachShadow({
    mode: "open",
  });
  var style = document.createElement("style");
  style.textContent = `
  .todo-item{
    max-width: 200px;
    border: 1px solid red;
    border-radius: 12px;
    padding: 10px 20px
  }
  `;
  shadow.innerHTML = `<div class="todo-item">
  <input type="checkbox"/>
  <span>${this.dataset.content}</span>
  </div>`;
  shadow.append(style);
});
