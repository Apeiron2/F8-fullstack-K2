// Destructuring: Áp dụng với mảng, object
// Phá vỡ cấu trúc để có thể truy cập vào các phần tử trong mảng và gán thành các biến riêng biệt

// const { name: cname, email, ...rest } = user;
// console.log(cname, email);
// console.log(rest);

// let { age, salary } = user;
// age = 35;
// console.log(age, salary);
// console.log(user);

// const user = [
//   "Hoàng An",
//   "hoangan.web@gmail.com",
//   32,
//   "Hà Nội",
//   { a: 1, b: 2, c: 3 },
// ];
// const [username, email, , ...{ rest }] = user;
// console.log(rest);

// const user = {
//   username: "tài",
//   email: "apeironisme@gmail.com",
//   age: 32,
//   address: "Hà Nội",
//   salary: 5000000,
// };
// const getObj = ({ username, email, age }) => {
//   console.log(username, email, age);
// };
// getObj(user);

var user = [
  {
    id: 1,
    name: "Nguyễn Văn A",
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
  },
];

const result = user
  .map(({ id, name }) => `<h2 id="${id}">${name}</h2>`)
  .join("");
console.log(result);
