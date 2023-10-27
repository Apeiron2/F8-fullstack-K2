const root = document.querySelector("#root");
let content = `
Liên hệ qua số điện thoại: 0123456789 hoặc 0987654321. Email liên hệ: example@email.com. Đồng thời https://regex101.com/r/zaFTmo/1, bạn cũng có thể xem
video hướng dẫn trên YouTube: https://youtu.be/zMR-k1cfwyM?si=Hi32nHxgSvARUjYo,
https://www.youtube.com/watch?v=zMR-k1cfwyM, https://www.youtube.com/shorts/GN27ilnyJWQ`;
const pattern = {
  tel: /((?:(?:0\d{2})|(?:\+84))\d{7,8})/gi,
  mail: /([a-zA-Z]\w+(\.\w{2,})*@[a-zA-Z]\w{2,}(\.\w{2,})*)/gi,
  youtube:
    /(?:(?:http|https):\/\/)?(?:(?:(?:(?:(?:[\w\-\_\.]*\.youtube)|(?:youtube))\.com)(?:(?:(?:\/shorts)(?:\/.*)?)|(?:\/watch\?v=([\w&=-]*)))?)|(?:youtu\.be\/([\w\=-]*)\?[\w\=-]*))/gi,
  link: /((http|https):\/\/[\w\-\.]*[\w\-\.]+\.[a-z]{2,}(:\d{2,})?(\/[\w\-?=&#\.]+)*)/gi,
};
let youtubeLinks = content.match(pattern.youtube);
let youtubeCode = {};
youtubeLinks.forEach((link) => {
  if (link.includes("youtu.be")) {
    youtubeCode[link] = link.match(/\/[\w-_]+\?/)[0].slice(1, -1);
  }
  if (link.includes("shorts")) {
    youtubeCode[link] = link.match(/shorts\/[\w-_]+/)[0].slice(7);
  }
  if (link.includes("watch")) {
    youtubeCode[link] = link.match(/=[\w-_]+/)[0].slice(1);
  }
});
content = content.replace(
  pattern.tel,
  `<a href="tel: $1" target="_blank">$1</a>`
);
content = content.replace(
  pattern.mail,
  `<a href="mailto: $1" target="_blank">$1</a>`
);
content = content.replace(
  pattern.link,
  ` 
<a href="$1" target="_blank">$1</a>`
);

let links = Object.keys(youtubeCode);
let lastYotubeLink = links[links.length - 1];
content += `<iframe src="https://youtube.com/embed/${youtubeCode[lastYotubeLink]}" height="100%" width="100%"></iframe>`;

root.innerHTML = content;
