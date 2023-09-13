// var form = document.querySelector("form");
// var change = false;

// var inputs = form.querySelectorAll("input");

// Object.keys(inputs).forEach(function (input) {
//   if (inputs[input].getAttribute("type") !== "checkbox") {
//     inputs[input].addEventListener("keyup", function () {
//       change = this.value != this.defaultValue;
//     });
//   } else {
//     inputs[input].addEventListener("change", function () {
//       change = this.checked;
//     });
//   }
// });

// form.addEventListener("submit", function () {
//   change = false;
// });

// window.addEventListener("beforeunload", function (e) {
//   if (change) e.returnValue = "Accept";
// });

var form = document.querySelector("form");
var inputs = form.querySelectorAll("input");
var handleLoad = function (event) {
  event.returnValue = "Something....";
};

function changeForm() {
  var change = false;
  Object.keys(inputs).forEach(function (i) {
    if (inputs[i].type != "checkbox") {
      change = inputs[i].value !== inputs[i].defaultValue;
    } else {
      change = inputs[i].checked !== inputs[i].defaultChecked;
    }
  });
  return change;
}

form.addEventListener("input", function (e) {
  if (e.target.querySelectorAll("option[selected]").length !== 0) {
    console.log(
      e.target.querySelectorAll("option[selected]")[0].value == e.target.value
    );
  } else {
    console.log(e.target.querySelector("option").value == e.target.value);
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  window.removeEventListener("beforeunload", handleLoad);
  this.submit();
});
