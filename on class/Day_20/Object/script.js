// var user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getName: function () {
//     var current = this;
//     return {
//       getInfo: function () {
//         return {
//           info: `
//           Name: ${current.name}
//           Email:${current.email}`,
//         };
//       },
//     };
//   },
// };

// console.log(user.getName().getInfo().info);

// var users = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   //rest parameter: tham số còn lại
//   combine: function (...args) {
//     var current = this;
//     var newArr = args.map((arg) => {
//       return current[arg];
//     });
//     return newArr;
//   },
// };
// console.log(users.combine("name", "email"));

// var users = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   //rest parameter: tham số còn lại
//   combine: function (...args) {
//     var newArr = args.map(function (arg) {
//       return this[arg];
//     });
//     return newArr;
//   },
// };
// console.log(users.combine("name", "email"));

// Object.prototype.combine = function (...args) {
//   var current = this;
//   var newArr = args.map(function (arg) {
//     return current[arg];
//   });
//   return newArr;
// };

// var user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };

// console.log(user.combine("name", "email"));
