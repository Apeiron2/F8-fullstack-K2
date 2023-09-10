var productsTable = document.querySelector(".products");
var listProducts = productsTable.querySelector("tbody");
var cartTable = document.querySelector(".cart");
var listProductsCart = cartTable.querySelector("tbody");
var total = cartTable.querySelector(".total");
var updateCartBtn = document.querySelector("#update-cart");
var deleteCartBtn = document.querySelector("#delete-cart");
var productsData = [];

function newEL(tag, text) {
  var element = document.createElement(tag);
  element.innerText = text;
  return element;
}
function newInput(value) {
  var input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("value", value);
  input.setAttribute("min", 0);
  input.setAttribute("step", 1);
  return input;
}
function updateTotal() {
  var quantity = cartTable.querySelectorAll("tr td:nth-of-type(4) input");
  var price = cartTable.querySelectorAll("tr td:nth-of-type(5)");
  var totalQuantity = Array.from(quantity).reduce(function (pre, current) {
    var tr = current.parentElement.parentElement;
    pre += +current.value;
    if (current.value == 0) tr.remove();
    localStorage.setItem(tr.getAttribute("data-id"), current.value);
    return pre;
  }, 0);
  var totalPrice = Array.from(price).reduce(function (pre, current) {
    pre += +current.innerText;
    return pre;
  }, 0);
  total.querySelector("td:nth-of-type(2)").innerText = totalQuantity;
  total.querySelector("td:nth-of-type(3)").innerText = totalPrice;
}
class Product {
  constructor(id, name, price, quantity = 1) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  render() {
    var thisProduct = this;
    var tr = document.createElement("tr");
    tr.dataset.id = this.id;
    td = newEL("td", listProducts.children.length + 1);
    tr.append(td);
    tr.append(newEL("td", this.name));
    tr.append(newEL("td", this.price));

    var td = document.createElement("td");
    td.append(newInput(this.quantity));

    var btn = newEL("button", "Thêm vào giỏ hàng");
    btn.addEventListener("click", function () {
      var quantity = this.previousElementSibling.value;
      if (quantity > 0 && quantity !== "e" && quantity) {
        thisProduct.quantity = Math.ceil(this.previousElementSibling.value);
        addProduct(thisProduct);
        updateTotal();
      }
    });
    td.append(btn);

    tr.append(td);
    listProducts.append(tr);
  }
}

productsData.push(new Product(1, "Sản phẩm 1", 1000));
productsData.push(new Product(2, "Sản phẩm 2", 2000));
productsData.push(new Product(3, "Sản phẩm 3", 3000));
productsData.push(new Product(4, "Sản phẩm 3", 4000));
productsData.push(new Product(5, "Sản phẩm 4", 5000));
localStorage.setItem("data", JSON.stringify(productsData));

window.addEventListener("load", function (e) {
  for (var i in productsData) {
    productsData[i].render();
  }
  if (localStorage.length > 1) {
    var data = JSON.parse(localStorage.getItem("data"));
    Object.keys(localStorage).forEach(function (key) {
      if (key !== "data") {
        data.forEach((product) => {
          if (product.id == key) {
            addProduct(
              new Product(
                key,
                product.name,
                product.price,
                localStorage.getItem(key)
              )
            );
          }
        });
        updateTotal();
      }
    });
  }
});

function addProduct(product) {
  if (!document.querySelector(".cart").innerHTML) {
    document.querySelector(".cart").innerHTML = `
    <thead>
    <th>STT</th>
    <th>Tên sản phẩm</th>
    <th>Giá</th>
    <th>Số lượng</th>
    <th>Thành tiền</th>
    <th>Xóa</th>
  </thead>
  <tbody>
    <tr class="total">
      <td colspan="3">Tổng</td>
      <td></td>
      <td colspan="2"></td>
    </tr>
  </tbody>
    `;
    cartTable = document.querySelector(".cart");
    listProductsCart = cartTable.querySelector("tbody");
    total = cartTable.querySelector(".total");
    document.querySelector(".null").style.display = "none";
    document.querySelector(".have-product").style.display = "block";
  }
  var exits = Array.from(listProductsCart.children).some(function (item) {
    return item.getAttribute("data-id") == product.id;
  });
  if (exits) {
    updateProduct(product);
  } else addNewProduct(product);
}

function addNewProduct(product) {
  var tr = document.createElement("tr");
  tr.dataset.id = product.id;
  td = newEL("td", listProductsCart.children.length);
  tr.append(td);
  tr.append(newEL("td", product.name));
  tr.append(newEL("td", product.price));
  var td = document.createElement("td");
  td.append(newInput(product.quantity));
  tr.append(td);
  tr.append(newEL("td", product.quantity * product.price));
  var td = document.createElement("td");
  var btn = newEL("button", "Xóa");
  btn.setAttribute("onclick", `del(${product.id})`);
  td.append(btn);
  tr.append(td);
  listProductsCart.insertBefore(tr, total);
}
function updateProduct(product) {
  var item = cartTable.querySelector(`[data-id='${product.id}']`);
  var quantity = +item.querySelector("input").value;
  quantity += +product.quantity;
  item.querySelector("input").value = quantity;
  item.querySelector("td:nth-of-type(5)").innerText = quantity * product.price;
}

function del(id) {
  var sure = confirm("Are you sure?");
  if (sure) {
    var item = cartTable.querySelector(`[data-id='${id}']`);
    item.remove();
    updateTotal();
  }
  if (total.querySelector("td:nth-of-type(2)").innerText == 0) {
    cartTable.innerHTML = "";
    document.querySelector(".null").style.display = "block";
    document.querySelector(".have-product").style.display = "none";
  }
}

updateCartBtn.addEventListener("click", function () {
  alert("Cập nhật giỏ hàng thành công!");
  var list = listProductsCart.querySelectorAll("tr:not(.total)");
  Object.keys(list).forEach(function (i) {
    var product = list[i];
    var quantity = product.querySelector("td:nth-of-type(4) input").value;
    var price = product.querySelector("td:nth-of-type(3)").innerText;
    product.querySelector("td:nth-of-type(5)").innerText = +quantity * +price;
  });
  updateTotal();
});

deleteCartBtn.addEventListener("click", function () {
  var sure = confirm("Are you sure?");
  if (sure) {
    cartTable.innerHTML = "";
    localStorage.clear();
    localStorage.setItem("data", JSON.stringify(productsData));
    alert("Xóa thành công!");
    document.querySelector(".null").style.display = "block";
    document.querySelector(".have-product").style.display = "none";
  }
});
