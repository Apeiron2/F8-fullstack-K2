var a = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  getName: function () {
    return this.name;
  },
};

var b = {
  name: "Nguyễn Dương",
  email: "duong@gmail.com",
  getName: function () {
    return this.name;
  },
};

var Person = function (name, email) {
  this.name = name;
  this.email = email;
  this.getName = function () {
    return "Fullstack";
  };
};

var person = new Person("Hoàng An", "hoangan.web@gmail.com");
console.log(person);
