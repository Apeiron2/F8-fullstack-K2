var openAccountForm = document.querySelector("header .account p");
var actionLogin = document.querySelector(".action .login");
var actionRegister = document.querySelector(".action .register");
var inputList = document.querySelectorAll("form>div");
var password = document.querySelectorAll(".password");
var accountForm = document.querySelector(".accountForm");
var loginForm = document.querySelector(".loginForm form");
var registerForm = document.querySelector(".registerForm form");
var overlay = document.querySelector(".overlay");

function createErrorNode() {
  var node = document.createElement("p");
  node.innerText = "Vui lòng nhập thông tin";
  return node;
}
function resetCssInput() {
  inputList.forEach(function (infor) {
    infor.querySelector("p")?.remove();
    infor.querySelector("input").classList.remove("error");
  });
}

actionLogin.addEventListener("click", function () {
  actionLogin.classList.add("active");
  actionRegister.classList.remove("active");
  loginForm.reset();
  resetCssInput();
});
actionRegister.addEventListener("click", function () {
  actionRegister.classList.add("active");
  actionLogin.classList.remove("active");
  registerForm.reset();
  resetCssInput();
});

inputList.forEach(function (infor) {
  infor.querySelector("input").addEventListener("blur", function () {
    inputList.forEach(function (infor) {
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
openAccountForm.addEventListener("click", function () {
  accountForm.style.display = "flex";
  overlay.style.display = "block";
});
overlay.addEventListener("click", function () {
  accountForm.style.display = "none";
  this.style.display = "none";
});
