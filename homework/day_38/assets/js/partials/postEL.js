export const postEL = (post) => {
  let { title, content, createAt: time, userId: user } = post;
  const pattern = {
    tel: /((?:(?:0\d{2})|(?:\+84))\d{7,8})/gi,
    mail: /([a-zA-Z]\w+(\.\w{2,})*@[a-zA-Z]\w{2,}(\.\w{2,})*)/gi,
    youtube:
      /(?:(?:http|https):\/\/)?(?:(?:(?:(?:(?:[\w\-\_\.]*\.youtube)|(?:youtube))\.com)(?:(?:(?:\/shorts)(?:\/.*)?)|(?:\/watch\?v=([\w&=-]*)))?)|(?:youtu\.be\/([\w\=-]*)\?[\w\=-]*))/gi,
    link: /((http|https):\/\/[\w\-\.]*[\w\-\.]+\.[a-z]{2,}(:\d{2,})?(\/[\w\-?=&#\.]+)*)/gi,
  };
  // Lấy link và mã video youtube
  let youtubeLinks = content.match(pattern.youtube);
  let youtubeCode = {};
  youtubeLinks?.forEach((link) => {
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
  //

  // replace
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
  // add iframe cho link youtube cuối cùng
  let links = Object.keys(youtubeCode);
  let lastYotubeLink = links[links.length - 1];
  content += `<iframe src="https://youtube.com/embed/${youtubeCode[lastYotubeLink]}" height="300%" width="100%"></iframe>`;
  const username = user.name;
  const div = document.createElement("div");
  div.classList.add("post", "row", "p-3", "border-bottom");
  div.innerHTML = `
    <div class="col-2">
    <div class="time-up fs-5"></div>
    <div class="time-ago fs-5 fst-italic"></div>
</div>
<div class="col-10 border-start">
    <div class="user d-flex gap-3 align-items-center">
        <div class="avatar rounded-circle bg-info bg-gradient d-flex justify-content-center align-items-center fs-1"
            style="width: 50px; height: 50px"></div>
        <div class="name fs-3 fw-bold text-uppercase text-decoration-underline"></div>
    </div>
    <div class="title fw-bold fs-4 p-3"></div>
    <div class="content ps-3 fs-5"></div>
</div>`;
  div.querySelector(".time-up").innerText = moment(time).format(
    "MMMM Do YYYY, h:mm:ss a"
  );
  div.querySelector(".time-ago").innerText = moment(time)
    .startOf("hour")
    .fromNow();
  div.querySelector(".avatar").innerText = username
    .split(" ")
    .pop()[0]
    .toUpperCase();
  div.querySelector(".name").innerText = username;
  div.querySelector(".title").innerText = title;
  div.querySelector(".content").innerHTML = content;
  return div;
};
