var actionLogin = document.querySelector(".action .login");
var actionRegister = document.querySelector(".action .register");
var registerForm = document.querySelector(".registerForm");
var loginForm = document.querySelector(".loginForm");
var inforList = document.querySelectorAll("form>div");
var password = document.querySelectorAll(".password");

function createErrorNode() {
  var node = document.createElement("p");
  node.innerText = "Vui lòng nhập thông tin";
  return node;
}

actionLogin.addEventListener("click", function () {
  actionLogin.classList.add("active");
  actionRegister.classList.remove("active");
});
actionRegister.addEventListener("click", function () {
  actionRegister.classList.add("active");
  actionLogin.classList.remove("active");
});

function addEvents() {
  addBlurEvent();
  addErrorEvent();
}

inforList.forEach(function (infor) {
  infor.querySelector("input").addEventListener("blur", function () {
    inforList.forEach(function (infor) {
      if (
        infor.querySelector("input").value === "" &&
        infor.querySelector("p") === null
      ) {
        infor.appendChild(createErrorNode());
        infor.querySelector("input").classList.add("error");
      } else if (
        infor.querySelector("input").value !== "" &&
        infor.querySelector("p") !== null
      ) {
        infor.querySelector("p").remove();
        infor.querySelector("input").classList.remove("error");
      }
    });
  });
});

password.forEach(function (item) {
  item.querySelector("i").addEventListener("click", function () {
    if (item.querySelector("input").type === "password")
      item.querySelector("input").setAttribute("type", "text");
    else {
      item.querySelector("input").setAttribute("type", "password");
    }
  });
});
