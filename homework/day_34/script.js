const container = document.querySelector(".container");
const picture = container.querySelector(".picture");
const img = picture.querySelector("img");
const overlay = picture.querySelector(".overlay");
const active = picture.querySelector(".active");
const display = container.querySelector(".display");
const imgShow = display.querySelector("img");

// Scale
const scaleDiv = document.querySelector(".scale");
const scaleValue = scaleDiv.querySelector("#value");
const scaleDownBtn = scaleDiv.querySelector("button:first-child");
const scaleUpBtn = scaleDiv.querySelector("button:last-child");

// URL Image
const url = `https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg`;
img.src = url;
imgShow.src = url;

// Xử lý Overlay theo Scale
let scale;
function handleScaleChange() {
  scale = +scaleValue.innerText / 100;
  imgShow.style.scale = scale;
  overlay.style.width = `${100 / scale}%`;
  overlay.style.height = `${100 / scale}%`;
}
handleScaleChange();

// Hành động zoom
active.addEventListener("mousemove", function (e) {
  e.stopPropagation();
  let x = e.layerX - overlay.clientWidth / 2;
  let y = e.layerY - overlay.clientHeight / 2;

  // Đặt giới hạn di chuyển Overlay
  let rateX = x / img.clientWidth;
  let rateY = y / img.clientHeight;
  let overlayZone = 1 - 1 / scale;
  if (rateX <= 0) {
    x = 0;
  }
  if (rateX >= overlayZone) {
    x = overlayZone * img.clientWidth;
  }
  if (rateY <= 0) {
    y = 0;
  }
  if (rateY >= overlayZone) {
    y = overlayZone * img.clientHeight;
  }

  // Di chuyển overlay
  overlay.style.left = x + "px";
  overlay.style.top = y + "px";
  showImg(x, y);
});

function showImg(x, y) {
  // Dịch chuyển (x,y)=(0,0) về tâm của imgShow
  x -= img.clientWidth / 2 - overlay.clientWidth / 2;
  y -= img.clientHeight / 2 - overlay.clientHeight / 2;

  // Dịch chuyển imgShow với tọa độ tính từ tâm imgShow
  imgShow.style.objectPosition = `${-1 * x}px ${-1 * y}px`;
}

scaleDownBtn.addEventListener("click", function () {
  scaleValue.innerText -= 10;
  if (scaleValue.innerText <= 100) scaleValue.innerText = 100;
  handleScaleChange();
});
scaleUpBtn.addEventListener("click", function () {
  scaleValue.innerText = +scaleValue.innerText + 10;
  handleScaleChange();
});
