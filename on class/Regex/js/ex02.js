//Regex
// const phone = "0914396346";
// const pattern = /^(0|\+84)\d{9}$/;
// console.log(pattern.test(phone));

// const str = "apeiron@gmail.com";
// const pattern = /^[^A-Z]+$/;
// console.log(pattern.test(str));

//Viết biểu thức kiểm tra 1 url hợp lệ

// const url =
//   "https://w3schools.com.vn/bootstrap5/tryit.asp?filename=trybs_container_padding&stacked=h";
// const pattern =
//   /^(http|https):\/\/[\w\-\.]*\.[\w\-]{3,}\.[\w\-]{2,}(\:\d{2,})?(\/?||\/[\w\-\?\=&#\.]+)$/;
// console.log(pattern.test(url));

let content = `It is a long established fact that https://fullstack-nodejs.fullstack.edu.vn/?id=a7c6eb6f-6fec-4fed-adac-68d1e0e7c780 a
reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
https://chat.openai.com/ it look like readable English. Many desktop publishing packages and web page editors now use
Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and
the like).`;

// const patten =
//   /(http|https):\/\/[\w\-\.]*[\w\-\.]+\.[a-z]{2,}(:\d{2,})?(\/?||\/[\w\-?=&#\.]+)/g;
// const list = content.match(patten);
// console.log(list);

// const html = `
// <img title="F8" src="https://fullstack.edu.vn" alt="/>`;

const pattern =
  /((http|https):\/\/[\w\-\.]*[\w\-\.]+\.[a-z]{2,}(:\d{2,})?(\/?|\/[\w\-?=&#\.]+))/gi;

content = content.replace(
  pattern,
  ` 
<a href="$1" target="_blank">$1</a>`
);
document.querySelector("p").innerHTML = content;
