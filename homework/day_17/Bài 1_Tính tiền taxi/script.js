// Tính tiền cước taxi dựa vào các điều kiện sau
// Số km ≤ 1 giá 15000đ
// 1 < số km ≤ 5 giá 13500đ
// Số km > 5 giá 11000đ
// Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền

function calPrice(numberKm) {
  if (numberKm >= 0) {
    var price = 0;

    const price1 = 15000;
    const mark1 = 1;
    const price2 = 13500;
    const mark2 = 5;
    const price3 = 11000;
    const markSale = 120;
    const sale = 10;

    if (numberKm <= mark1) {
      price = price1 * numberKm;
    } else if (mark1 < numberKm && numberKm <= mark2) {
      price = price1 * mark1 + price2 * (numberKm - mark1);
    } else {
      price =
        price1 * mark1 + price2 * (mark2 - mark1) + (numberKm - mark2) * price3;
    }
    if (numberKm > markSale) price *= 1 - sale / 100;
    return `Số tiền phải trả là: ${price} VNĐ`;
  } else return "Số km phải lớn hơn 0!";
}

document.getElementById("calPriceForm").addEventListener("submit", (event) => {
  event.preventDefault();
  var numberKm = +document.getElementById("km").value;
  document.getElementById("show-price").innerHTML = calPrice(numberKm);
});
