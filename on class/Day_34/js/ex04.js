// /**
//  Async function luôn trả về 1 Promise
//  */

const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hoàng An");
    }, 1000);
  });
};

const getProduct = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Iphone 15");
    }, 1000);
  });
};
// const showUser = async () => {
//   try {
//     console.log(await getUser());
//   } catch (error) {
//     console.log(error);
//   }
// };

// showUser();

(async () => {
  try {
    let user = await getUser();
    console.log(user);
    let product = await getProduct();
    console.log(product);
  } catch (error) {
    console.log(error);
  }
})();
