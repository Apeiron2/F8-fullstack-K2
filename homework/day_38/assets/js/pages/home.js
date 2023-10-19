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
  // Kiểm tra đã đăng nhập chưa
  if (tokens) {
    // Rồi thì append form đăng bài
    writePost.append(postFormEL(tokens));
  } else {
    // Chưa thì append nút đăng nhập
    writePost.innerHTML = `
    <button class="btn btn-primary">Đăng nhập</button>
    `;
    writePost.querySelector(".btn").addEventListener("click", (e) => {
      renderLoginPage();
    });
  }
  // Get post
  let page = 1;
  const posts = root.querySelector(".posts");
  const { response, data } = await client.get(`/blogs?limit=10&page=${page}`);
  if (response.ok) {
    Array.from(data.data).forEach((post) => {
      posts.append(postEL(post));
    });
  }
  // Infinity scroll
  let isloading = false;
  window.addEventListener("scroll", async () => {
    if (
      window.innerHeight + window.scrollY >=
        (document.body.offsetHeight * 80) / 100 &&
      !isloading
    ) {
      page++;
      // Start load
      isloading = true;

      //Loading ...
      const { response, data } = await client.get(
        `/blogs?limit=10&page=${page}`
      );
      if (response.ok) {
        Array.from(data.data).forEach((post) => {
          posts.append(postEL(post));
        });
      }
      // Done
      isloading = false;
    }
  });
};
