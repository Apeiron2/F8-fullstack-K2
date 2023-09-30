class F8 {
  constructor() {}
  static component(name, obj) {
    // Khai báo biến được dùng trong template
    if (obj.data?.()) {
      let data = obj.data?.();
      for (let key in data) {
        window[key] = data[key];
      }
    }

    //Custom Element
    customElements.define(
      name,
      class extends HTMLElement {
        constructor() {
          super();
        }
        connectedCallback() {
          // Tạo thẻ template
          let templateEL = document.createElement("template");
          templateEL.innerHTML = obj.template;
          //Clone template
          var template = templateEL.content.cloneNode(true);
          let variables = obj.template.match(/{{.+?}}/g);
          if (variables) {
            variables.forEach((i) => {
              let variable = i.match(/{{(.+?)}}/);
              Array.from(template.children).forEach((Element) => {
                Element.innerHTML = Element.innerHTML.replaceAll(
                  variable[0],
                  window[variable[1].trim()]
                );
                console.log(Element);
              });
            });
          }
          //Lấy các attribute v-on:
          Array.from(template.children).forEach((EL) => {
            Array.from(EL.attributes).forEach((attr) => {
              let indexEvent = attr.name.indexOf(":") + 1;
              let eventName = attr.name.slice(indexEvent);
              let action = attr.value;
              EL.addEventListener(eventName, function () {
                eval(action);
              });
            });
          });
          this.append(template);
        }
      }
    );
  }
}
