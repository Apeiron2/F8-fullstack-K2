var container = document.querySelector(".container");
var itemList = document.querySelectorAll(".item");

Array.from(itemList).forEach(function (item) {
  item.dataset.y = item.offsetTop;
  item.dataset.yTop = item.offsetTop - item.clientHeight / 4;
  item.dataset.yBottom = item.offsetTop + item.clientHeight / 4;
  addEventDrag(item);
});

function updateTable() {
  itemList = document.querySelectorAll(".item");
  Array.from(itemList).forEach(function (item) {
    item.dataset.y = item.offsetTop;
    item.dataset.yTop = item.offsetTop - item.clientHeight / 4;
    item.dataset.yBottom = item.offsetTop + item.clientHeight / 4;
  });
}
function addEventDrag(element) {
  var innerX;
  var innerY;
  var isFinal = false;
  element.addEventListener("drag", function (e) {
    this.style.opacity = 0.3;
    var currentY = e.y - innerY;
    var currentIndex;
    //Hành động kéo xuống
    if (e.offsetY > 0) {
      currentIndex = Array.from(itemList).findLast(function (item, index) {
        var limitTop = itemList[index - 1]
          ? itemList[index - 1].dataset.yTop
          : 0;
        if (currentY >= limitTop) {
          return item;
        }
      });
    }
    //Hành động kéo lên
    if (e.offsetY < 0) {
      currentIndex = Array.from(itemList).find(function (item, index) {
        var limitBottom = item.dataset.yBottom;
        if (currentY <= limitBottom) {
          return item;
        }
      });
    }
    // console.log(currentIndex);
    console.log(isFinal);
    if (isFinal) {
      element.parentElement.insertBefore(
        itemList[itemList.length - 1],
        element.nextSibling
      );
    } else {
      container.insertBefore(element, currentIndex);
    }
    updateTable();
  });
  element.addEventListener("dragstart", function (e) {
    innerX = e.offsetX;
    innerY = e.offsetY;
  });
  element.addEventListener("dragend", function (e) {
    this.style.opacity = 1;
    var currentY = e.y - innerY;
    var currentIndex;
    //Hành động kéo xuống
    if (e.offsetY > 0) {
      currentIndex = Array.from(itemList).findLast(function (item, index) {
        var limitTop = itemList[index - 1]
          ? itemList[index - 1].dataset.yTop
          : 0;
        if (currentY >= limitTop) {
          return item;
        }
      });
    }
    //Hành động kéo lên
    if (e.offsetY < 0) {
      currentIndex = Array.from(itemList).find(function (item, index) {
        var limitBottom = item.dataset.yBottom;
        if (currentY <= limitBottom) {
          return item;
        }
      });
    }
    // console.log(currentIndex);
    console.log(isFinal);
    if (isFinal) {
      element.parentElement.insertBefore(
        itemList[itemList.length - 1],
        element.nextSibling
      );
    } else {
      container.insertBefore(element, currentIndex);
    }
    updateTable();
  });
}
