import { client } from "../client.js";
import { renderHomePage } from "./home.js";
export const renderLoginPage = () => {
  root.innerHTML = `<div id="login-page">
    <div class="container">
        <div class="row align-items-center fs-5" style="height: 100vh">
            <div class="col-6 d-flex flex-column justify-content-center align-items-center">
                <h1>Đăng nhập</h1>
                <div class="btn-group">
                    <button class="btn btn-outline-primary active">
                        Đăng nhập
                    </button>
                    <button class="btn btn-outline-primary">Đăng ký</button>
                </div>
            </div>
            <div class="col-6" id="login">
                <form class="row g-3 w-50">
                    <div class="col-12">
                        <label for="login-email" class="form-label">Email</label>
                        <input type="email" class="form-control p-2" id="login-email" placeholder="Email" required />
                    </div>
                    <div class="col-12">
                        <label for="login-password" class="form-label">Password</label>
                        <input type="password" class="form-control p-2" id="login-password" placeholder="Password"
                            required />
                    </div>
                    <div class="col-12">
                        <p class="text-danger msg p-1"></p>
                    </div>
                    <div class="col">
                        <button class="btn btn-primary p-2 d-flex align-items-center">
                            Đăng nhập
                        </button>
                    </div>
                </form>
            </div>
            <div class="col-6" id="register">
                <form class="row g-3 w-50">
                    <div class="col-12">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control p-2" id="username" placeholder="Username" required />
                    </div>
                    <div class="col-12">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control p-2" id="email" placeholder="Email" required />
                    </div>
                    <div class="col-12">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control p-2" id="password" placeholder="Password" required />
                    </div>
                    <div class="col-12">
                        <label for="repeat-password" class="form-label">Repeat Password</label>
                        <input type="password" class="form-control p-2" id="repeat-password"
                            placeholder="Repeat Password" required />
                    </div>
                    <div class="col-12">
                        <p class="text-danger msg p-1"></p>
                    </div>
                    <div class="col">
                        <button class="btn btn-primary p-2 d-flex align-items-center">
                            Đăng ký
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>`;

  const loginPage = root.querySelector("#login-page");
  const loginToggle = loginPage.querySelector(".btn-group button:first-child");
  const registerToggle = loginPage.querySelector(
    ".btn-group button:last-child"
  );
  const statusForm = loginPage.querySelector("h1");
  const loginFormEL = loginPage.querySelector("#login");
  const registerFormEL = loginPage.querySelector("#register");

  const loginForm = loginFormEL.querySelector("form");
  const registerForm = registerFormEL.querySelector("form");

  registerFormEL.style.display = "none";

  loginToggle.addEventListener("click", function (e) {
    statusForm.innerText = e.target.innerText;
    loginToggle.classList.add("active");
    registerToggle.classList.remove("active");
    registerFormEL.style.display = "none";
    loginFormEL.style.display = "flex";
  });

  registerToggle.addEventListener("click", function (e) {
    statusForm.innerText = e.target.innerText;
    loginToggle.classList.remove("active");
    registerToggle.classList.add("active");
    registerFormEL.style.display = "flex";
    loginFormEL.style.display = "none";
  });

  // Hiệu ứng button loading
  let targetBtnOrigin = null;
  const loadingBtn = (target, completed = null) => {
    const btn = target.querySelector(".btn");
    if (!completed) {
      targetBtnOrigin = btn.innerHTML;
      btn.innerHTML = `<span class="spinner-border spinner-border-sm text-light me-2"></span>Loading...`;
      btn.disable = true;
    } else {
      btn.innerHTML = targetBtnOrigin;
    }
  };

  // Đăng nhập
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const msg = form.querySelector(".msg");
    msg.innerText = "";
    //Get data
    const body = {
      email: form["login-email"].value,
      password: form["login-password"].value,
    };

    loadingBtn(form);
    const { response, data } = await client.post("/auth/login", body);
    if (response.ok) {
      localStorage.setItem("login_token", JSON.stringify(data.data));
      client.setToken(data.data.accessToken);
      setTimeout(() => {
        renderHomePage(localStorage.getItem("login_token"));
      }, 1000);
    }
    loadingBtn(form, "done");
    msg.innerText = data.message;
  });

  //Đăng ký
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const msg = form.querySelector(".msg");
    msg.innerText = "";
    //Get data
    const name = form["username"].value;
    const email = form["email"].value;
    const password = form["password"].value;
    const repeatPassword = form["repeat-password"].value;

    if (password !== repeatPassword) {
      msg.innerText = "Mật khẩu không khớp!";
    } else {
      loadingBtn(form);
      const { data } = await client.post("/auth/register", {
        email,
        password,
        name,
      });
      loadingBtn(form, "done");
      msg.innerText = data.message;
    }
  });
};
