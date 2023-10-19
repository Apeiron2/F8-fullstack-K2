export const postEL = (post) => {
  const { title, content, timeUp: time, userId: user } = post;
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
