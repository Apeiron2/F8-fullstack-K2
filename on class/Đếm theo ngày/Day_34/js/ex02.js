const getUser = (id) => {
  const users = [
    {
      id: 1,
      name: "User 1",
      salary: 5000000,
    },
    {
      id: 2,
      name: "User 2",
      salary: 15000000,
    },
    {
      id: 3,
      name: "User 3",
      salary: 25000000,
    },
    {
      id: 4,
      name: "User 4",
      salary: 35000000,
    },
  ];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(({ id: _id }) => id === _id);
      resolve(user);
    }, 1000);
  });
};

const lists = [1, 3, 4];

let salary = 0;

// let promise = new Promise((resolve) => {
//   let len = lists.length;
//   lists.forEach((id) => {
//     getUser(id).then((data) => {
//       salary += data.salary;
//       len--;
//       if (!len) resolve(salary);
//     });
//   });
// });

// promise.then((salary) => {
//   console.log(salary);
// });

//promise.all() ==> Giải quyết các bài toán sử dụng nhiều promise cùng 1 lúc

//Tạo ra 1 mảng chứa tất cả các promise

const request = lists.map(
  (id) =>
    new Promise((resolve, reject) => {
      resolve(getUser(id));
    })
);
Promise.all(request).then((users) => {
  const salary = users.reduce((total, user) => total + user.salary, 0);
  console.log(salary);
});
Promise.reject("Error").catch((err) => console.log(err));
