var checkAll = document.querySelector("#check-all");
var checkItem = document.querySelectorAll(".item input");

checkAll.addEventListener("change", function () {
  Object.keys(checkItem).forEach(function (item) {
    checkItem[item].checked = checkAll.checked;
  });
});

Object.keys(checkItem).forEach(function (item) {
  checkItem[item].addEventListener("change", function () {
    var all = true;
    Object.keys(checkItem).forEach(function (item) {
      if (!checkItem[item].checked) {
        all = false;
      }
    });
    checkAll.checked = all;
  });
});
