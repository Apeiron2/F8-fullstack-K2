var query = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  category: 1,
};

Object.prototype.queryParam = function () {
  var param = "";
  var current = this;
  Object.keys(current).forEach(function (key) {
    param += `${key}=${current[key]}&`;
  });
  return param.slice(0, -1).replaceAll(" ", "+");
};

console.log(query.queryParam());

var queryString = Object.entries(query)
  .map(function (item) {
    return item.join("=");
  })
  .join("&")
  .replaceAll(" ", "+");

console.log(queryString());
