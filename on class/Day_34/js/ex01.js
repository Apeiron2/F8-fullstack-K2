// const getA = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("get A");
//     }, 1000);
//   });
// };
// const getB = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("get B");
//     }, 1500);
//   });
// };
// const getC = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("get C");
//     }, 500);
//   });
// };
// // getA().then((data) => {
// //   console.log(data);
// // });
// // getB().then((data) => {
// //   console.log(data);
// // });
// // getC().then((data) => {
// //   console.log(data);
// // });

// // getA().then((data) => {
// //   console.log(data);
// //   getB().then((data) => {
// //     console.log(data);
// //     getC().then((data) => {
// //       console.log(data);
// //     });
// //   });
// // });

// getA()
//   .then((data) => {
//     console.log(data);
//     return getB();
//   })
//   .then((data) => {
//     console.log(data);
//     return getC();
//   })
//   .then((data) => {
//     console.log(data);
//   });

const getRequest = () => {
  return new Promise((resolve) => {
    const data = {
      name: "F8",
      fullname: "Vũ Đức Tài",
    };
    const response = {
      text: () =>
        new Promise((resolve) => {
          resolve(JSON.stringify(data));
        }),
      json: () =>
        new Promise((resolve) => {
          resolve(data);
        }),
    };
    setTimeout(() => {
      resolve(response);
    }, 1000);
  });
};

getRequest()
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
