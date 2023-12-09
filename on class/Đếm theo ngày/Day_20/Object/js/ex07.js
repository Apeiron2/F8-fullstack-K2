var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

var customer = {
  job: "Giảng Viên",
  salary: 5000000,
};

Object.combine = function (obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
};

console.log(Object.combine(user, customer));
