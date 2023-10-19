import { client } from "../client.js";
import { renderHomePage } from "../pages/home.js";
import { requestRefresh } from "../token.js";

export const postFormEL = (tokens) => {
  const username = JSON.parse(tokens).name;
  const div = document.createElement("div");
  div.classList.add("row", "g-2", "fs-5");
  div.innerHTML = `
    <div class="col-6">
    <h1 class="text-info">Bloger</h1>
    <form class="d-flex flex-column">
        <div class="title d-flex flex-column m-2">
            <label for="title ">Title</label>
            <input type="text" class="p-2" id="title" required/>
        </div>
        <div class="content d-flex flex-column m-2">
            <label for="content">Content</label>
            <textarea id="content" cols="30" rows="10" class="p-2" required></textarea>
        </div>
        <button class="btn btn-primary m-2">Đăng bài</button>
    </form>
</div>
<div class="col-6 d-flex justify-content-center align-items-center">
    <div class="w-50 d-flex flex-column align-items-center" style="gap: 50px">
        <div class="avatar fs-1 d-flex align-items-center justify-content-center rounded-circle bg-info"
            style="width: 100px; height: 100px">
            ${username.split(" ").pop()[0].toUpperCase()}
        </div>
        <div class="name text-align-center fs-2 fw-bold text-decoration-underline">
            ${username}
        </div>
        <button class="btn btn-primary logout">Đăng xuất</button>
    </div>
</div>
    `;
  div.querySelector(".logout").addEventListener("click", () => {
    localStorage.removeItem("login_token");
    renderHomePage(false);
  });
  const form = div.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const body = {
      title: e.target["title"].value,
      content: e.target["content"].value,
    };
    form.querySelector(
      ".btn"
    ).innerHTML = `<span class="spinner-border spinner-border-sm text-light me-2"></span>Loading...`;
    const { refreshToken } = JSON.parse(localStorage.getItem("login_token"));

    const { response, data } = await client.post("/blogs", body);
    if (response.ok) {
      // Nếu post bài thành công
      renderHomePage(localStorage.getItem("login_token"));
    } else {
      // Nếu post bài thất bại
      if (response.status == 401) {
        const { response, data } = await requestRefresh(refreshToken);
        if (response.ok) {
          // Nếu cấp lại accessToken thành công
          const { accessToken, refreshToken } = data.data.token;
          client.setToken(accessToken);
          const loginToken = JSON.parse(localStorage.getItem("login_token"));
          loginToken.accessToken = accessToken;
          loginToken.refreshToken = refreshToken;
          localStorage.setItem("login_token", JSON.stringify(loginToken));
          client.post("/blogs", body);
          renderHomePage(localStorage.getItem("login_token"));
        } else {
          // Nếu cấp lại thất bại || refreshToken hết hạn
          localStorage.removeItem("login_token");
          renderHomePage(false);
        }
      }
    }
  });
  return div;
};
