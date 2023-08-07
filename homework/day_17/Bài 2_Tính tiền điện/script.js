function maxLevel(n) {
  switch (n) {
    case 0:
      return 0;
    case 1:
      return 50;
    case 2:
      return 100;
    case 3:
      return 200;
    case 4:
      return 300;
    case 5:
      return 400;
    default:
      break;
  }
}
function priceLevel(n) {
  switch (n) {
    case 1:
      return 1678;
    case 2:
      return 1734;
    case 3:
      return 2014;
    case 4:
      return 2536;
    case 5:
      return 2834;
    case 6:
      return 2927;
    default:
      break;
  }
}
function calPriceWithLevel(n, kWh) {
  var totalLevel = 0;
  for (let i = 1; i <= n - 1; i++) {
    totalLevel += priceLevel(i) * (maxLevel(i) - maxLevel(i - 1));
  }
  return totalLevel + (kWh - maxLevel(n - 1)) * priceLevel(n);
}
function calPrice(getMessage, kWh) {
  var price = 0;
  if (kWh <= maxLevel(1)) {
    price = kWh * priceLevel(1);
  } else if (kWh <= maxLevel(2)) {
    price = calPriceWithLevel(2, kWh);
  } else if (kWh <= maxLevel(3)) {
    price = calPriceWithLevel(3, kWh);
  } else if (kWh <= maxLevel(4)) {
    price = calPriceWithLevel(4, kWh);
  } else if (kWh <= maxLevel(5)) {
    price = calPriceWithLevel(5, kWh);
  } else {
    price = calPriceWithLevel(6, kWh);
  }
  getMessage(price);
}

document.getElementById("calPriceForm").addEventListener("submit", (event) => {
  event.preventDefault();
  var kWh = +document.getElementById("kWh").value;
  var getMessage = (price) => {
    document.getElementById(
      "show-price"
    ).innerHTML = `Số tiền phải đóng tháng này là: ${price} VNĐ`;
  };
  calPrice(getMessage, kWh);
});
