var root = document.querySelector("#root");
var user = [
  {
    id: 1,
    name: "Nguyễn Văn A",
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
  },
];
// template cho phép tạo thẻ bọc #document-fragment
var render = function () {
  var html =
    `<h1 v-if="0">Danh sách khách hàng</h1>` +
    user
      .map(function (user) {
        return `<h2>${user.name} <button>Xóa</button></h2>`;
      })
      .join("");
  var templateEL = document.createElement("template");
  templateEL.innerHTML = html;
  var templateNode = templateEL.content.cloneNode(true);
  if (templateNode.children.length) {
    Array.from(templateNode.children).forEach(function (element) {
      handleAttribute(element);
    });
  }
  console.log(templateNode);
  root.append(templateNode);
};
var handleAttribute = function (element) {
  var vifAttr = element.getAttribute("v-if");
  if (vifAttr) {
    if (+vifAttr !== 1) {
      element.remove();
    }
  }
};
render();
