const openBtn = document.querySelector(".btn.open");
const closeBtn = document.querySelector(".btn.close");
const reloadBtn = document.querySelector(".btn.reload");
const a = document.querySelector("a");
let website;
openBtn.addEventListener("click", () => {
  website = window.open("https://fullstack.edu.vn", "", "width=400;height=300");
});

closeBtn.addEventListener("click", () => {
  website.close();
  window.location.href = "https://fullstack.edu.vn";
});

reloadBtn.addEventListener("click", () => {
  window.location.reload();
});

a.addEventListener("click", (e) => {
  e.preventDefault();
  const url = e.target.getAttribute("href");
  window.history.pushState({ id: 1, name: "Vũ Đức Tài" }, "", "#" + url);
});
