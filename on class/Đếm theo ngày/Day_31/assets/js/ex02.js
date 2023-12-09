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

component.create("hê-lô-wua", function () {
  this.innerText = "xin chào";
});
component.create("f8-fullstacks", function () {
  this.innerHTML = `
    <img src="${this.getAttribute("link") ?? ""}" height="${
    this.getAttribute("height") ?? ""
  }"/>
  ${this.innerText ? `<p>${this.innerText}</p>` : ""}
  `;
});
