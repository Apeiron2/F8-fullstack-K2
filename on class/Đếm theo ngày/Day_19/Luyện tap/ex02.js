var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  getName: function () {
    return this.name;
  },
  jobs: {
    name: "Giảng viên",
    salary: 5000000,
  },
};

Object.isObject = (n) => {
  return typeof n === "object" && n !== null && !Array.isArray(n);
};
console.log(Object.isObject(null));
