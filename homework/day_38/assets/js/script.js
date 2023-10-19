import { renderLoginPage } from "./pages/login.js";
import { renderHomePage } from "./pages/home.js";
const root = document.querySelector("#root");

renderHomePage(localStorage.getItem("login_token"));
