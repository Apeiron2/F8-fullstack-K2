import { client } from "../client.js";

import { postEL } from "../partials/postEL.js";
import { postFormEL } from "../partials/postFormEL.js";
import { renderLoginPage } from "./login.js";

export const renderHomePage = async (tokens) => {
  root.innerHTML = `
    <div class="home">
    <div class="container">
        <div class="write-post p-3"></div>
        <div class="posts"></div>
    </div>
</div>`;
  const homeEL = root.querySelector(".home");
  const writePost = homeEL.querySelector(".write-post");
  if (tokens) {
    writePost.append(postFormEL(tokens));
  } else {
    writePost.innerHTML = `
    <button class="btn btn-primary">Đăng nhập</button>
    `;
    writePost.querySelector(".btn").addEventListener("click", (e) => {
      renderLoginPage();
    });
  }
  const posts = root.querySelector(".posts");
  const { response, data } = await client.get("/blogs");
  if (response.ok) {
    Array.from(data.data).forEach((post) => {
      posts.append(postEL(post));
    });
  }
};
