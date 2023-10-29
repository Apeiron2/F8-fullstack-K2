import { client } from "./client.js";
import { renderHomePage } from "./pages/home.js";
const root = document.querySelector("#root");

renderHomePage(localStorage.getItem("login_token"));

const refresh = async () => {
  if (localStorage.getItem("login_token")) {
    // Lấy refreshToken
    const { refreshToken } = JSON.parse(localStorage.getItem("login_token"));
    // Cấp lại accessToken
    const { response, data } = await requestRefresh(refreshToken);
    if (response.ok) {
      // Nếu cấp lại accessToken thành công
      const { accessToken } = data.data.token;
      client.setToken(accessToken);
      // Cập nhật Token vào localStorage
      const loginToken = JSON.parse(localStorage.getItem("login_token"));
      loginToken.accessToken = accessToken;
      localStorage.setItem("login_token", JSON.stringify(loginToken));
    } else {
      // Nếu cấp lại thất bại || refreshToken hết hạn
      localStorage.removeItem("login_token");
      renderHomePage(false);
    }
  }
};
