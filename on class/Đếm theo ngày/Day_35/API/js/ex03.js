// Authentication
/** Xác thực */

// Authorization
/** Phân quyền */

import { client } from "./client.js";
import { requestRefresh } from "./token.js";
client.setUrl("https://api.escuelajs.co/api/v1");

//
const root = document.querySelector("#root");
const isLogin = () => {
  const tokens = localStorage.getItem("login_token");
  if (tokens) return true;
  return false;
};
const loading = (mode = "add") => {
  const loginForm = root.querySelector(".login");
  if (loginForm) {
    const btn = loginForm.querySelector(".btn");
    if (mode === "add") {
      (btn.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Loading`),
        (btn.disabled = true);
    } else {
      (btn.innerHTML = "Đăng nhập"), (btn.disabled = false);
    }
  }
};

const handleLogin = async (data) => {
  const msg = document.querySelector(".msg");
  msg.innerHTML = ``;
  loading();
  const { data: tokens, response } = await client.post(`/auth/login`, data);
  if (response.ok) {
    localStorage.setItem("login_token", JSON.stringify(tokens));
    render();
  } else {
    msg.innerHTML = "Thông tin đăng nhập không hợp lệ";
  }
  loading(tokens);
};
const handleLogout = () => {
  localStorage.clear();
  render();
};

const getProfile = async () => {
  const tokens = localStorage.getItem("login_token");
  if (tokens) {
    const { access_token: accessToken, refresh_token: refreshToken } =
      JSON.parse(tokens);

    if (!accessToken) {
      //Xử lý log out
      handleLogout();
    } else {
      client.setToken(accessToken);
      setTimeout(() => {
        localStorage.clear();
      }, 5000);
      const { response, data } = await client.get("/auth/profile");
      if (!response.ok) {
        //Xử lý logout
        const { data: newToken } = await requestRefresh(refreshToken);
        if (newToken) {
          localStorage.setItem("login_token", JSON.stringify(newToken));
          getProfile();
        } else {
          handleLogout();
        }
      } else {
        const profileName = document.querySelector(".profile .name");
        // const profileAvatar = document.querySelector(".profile .avatar");
        const profileRole = document.querySelector(".profile .role");

        profileName.innerHTML = data.name;
        // profileAvatar.src = data.avatar;
        profileRole.innerHTML = data.role;
      }
    }
  }
};

const eventLogin = () => {
  const loginForm = root.querySelector(".login");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailEL = e.target.querySelector(".email");
      const passwordEL = e.target.querySelector(".password");
      const email = emailEL.value;
      const password = passwordEL.value;
      handleLogin({
        email,
        password,
      });
    });
  }
};
const eventLogout = () => {
  const logout = document.querySelector(".logout");
  if (isLogin && logout) {
    logout.addEventListener("click", (e) => {
      handleLogout();
    });
  }
};

const render = () => {
  if (isLogin()) {
    root.innerHTML = `
    <div class="container row">
        <h2>Chào mừng bạn đến với F8</h2>
        <ul class="profile" >
            <li><img class="avatar" src="" alt="" style="max-width:100px; border-radius:50%"></li>
            <li>Chào bạn: <span class="role"></span> <span class="name">Loading...</span></li>
            <li><a href="#" class="logout">Đăng xuất</a></li>
        </ul>
    </div>
    `;
    getProfile();
    eventLogout();
  } else {
    root.innerHTML = `
    <div class="container py-3">
        <div class="row">
        <div class="col-7 justify-content-center">
            <h2 class="text-center">Đăng nhập</h2>
            <form class="login">
            <div class="mb-3">
                <label for="">Email</label>
                <input
                type="email"
                class="form-control email"
                value="john@mail.com"
                placeholder="Email..."
                />
                <label for="">Password</label>
                <input
                type="password"
                class="form-control password"
                placeholder="Password..."
                value="changeme"
                />
            </div>
            <div class="d-grid">
                <button class="btn btn-primary">Đăng nhập</button>
            </div>
            </form>
            <div class="msg text-danger mt-2 text-center"></div>
        </div>
        </div>
    </div>`;
    eventLogin();
  }
};
render();
/**
 * Lấy dữ liệu từ form
 * Send API
 * Trả về Token hoặc lỗi
 * Nếu thành công -> lưu vào Storage
 */

// let token = "Token";
// let isExpire = false;
// let refreshPromise = null;

// const requestRefresh = () => {
//   if (!refreshPromise) {
//     refreshPromise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("New Token:" + Date.now());
//       }, 1000);
//     });
//   }
//   return refreshPromise;
// };

// const requestAPI = async (url) => {
//   if (isExpire) {
//     token = await requestRefresh();
//   }
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Call API: ${url} với ${token}`);
//     }, 500);
//   });
// };

// (async () => {
//   const slider = await requestAPI("/slider");
//   console.log(slider);
// })();
// (async () => {
//   isExpire = true;
//   const pro = await requestAPI("/pro");
//   console.log(pro);
// })();
// (async () => {
//   const free = await requestAPI("/free");
//   console.log(free);
// })();

/**
 * Refresh lưu ở trên Server và Client
 * Access lưu ở Client
  - Cookie: Dễ bị tấn công CSRF
  - LocalStorage, SessionStorage: Dễ bị tấn công XSS
 */
