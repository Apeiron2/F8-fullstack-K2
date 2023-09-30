// const getTotal = (a, b) => a + b;
// console.log(getTotal(5, 10));

//Closure
// var sum = (a) => (b) => a + b;
// var add = sum(10);
// console.log(add(20));

// const user = [
//   {
//     id: 1,
//     name: "Nguyễn Văn A",
//   },
//   {
//     id: 2,
//     name: "Nguyễn Văn B",
//   },
//   {
//     id: 3,
//     name: "Nguyễn Văn C",
//   },
// ];
// const html = user.map((user) => `<h2>${user.name}</h2>`);

// document.body.innerHTML = html;

/**
 Lưu ý với Arrow Function
 1. Arrow Function không có tác dụng thay thế function truyền thống
 2. Arrow Function không binding được this
 3. Arrow Function không binding đc arguments
 4. Arrow Function không nên sử dụng để làm method của Object
 5. Arrow Function không có Hoisting
 6. Arrow Function không được dùng để tạo Constructor
 */

const getMax = (...args) => {
  console.log(args);
};
getMax(10, 20, 30);
