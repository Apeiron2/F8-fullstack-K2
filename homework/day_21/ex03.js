function User(name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
  this.role = "user";
}

function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    return "Vui lòng nhập đủ thông tin!";
  } else {
    data.push(new User(name, password, email));
  }
}

function handleLogin(name, password) {
  var login = false;
  for (var i in data) {
    var user = data[i];
    if (user["name"] === name && user["password"] === password) {
      login = true;
      break;
    }
  }
  if (login) return user;
  return "Thông tin đăng nhập không hợp lệ";
}
var data = [];
var dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
var dataRegister = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
var dataLogin = handleLogin("Nguyen Van B", "1234567");
console.log(data);
console.log(dataLogin);
