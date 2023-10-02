//Promise
/**
 3 cách xử lý bất đồng bộ
 - Callback
 - Promise
 - Async Await Function
 */
/**
 Promise State
 - pending -> Chờ xử lý
 - fullfilled-> Xử lý thành công
 - reject -> xử lý thất bại
 */
const downloadImage = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        url: "https://fullstack.edu.vn",
        size: 30,
      };
      resolve(data);
      //   reject("Lỗi mạng");
    }, 1000);
  });
  return promise;
};
downloadImage()
  .then((res) => {
    return JSON.stringify(res);
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((res) => {
    console.log(res);
  })
  .finally((cleanData) => {
    console.log(cleanData);
  });
