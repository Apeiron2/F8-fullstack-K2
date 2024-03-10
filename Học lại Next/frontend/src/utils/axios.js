"use client";
import axios from "axios";
import Cookies from "js-cookie";
const axiosInstance = axios.create({
  baseURL: process.env.HOST,
  headers: { "Content-Type": "application/json" },
});
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (Cookies.get("login_token")) {
      const { accessToken } = JSON.parse(Cookies.get("login_token"));
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;
    const originalRequest = config;

    if (
      response &&
      response.status === 401 &&
      originalRequest.url !== "/auth/refresh"
    ) {
      // Refresh token
      let refreshToken;
      if (Cookies.get("login_token")) {
        refreshToken = JSON.parse(Cookies.get("login_token"));
      }
      if (refreshToken) {
        // Gọi API refresh token
        return axiosInstance
          .post("/auth/refresh", {
            refreshToken,
          })
          .then((res) => {
            const { data } = res.data;
            Cookies.set("login_token", JSON.stringify(data));
            // Cập nhật header với token mới
            originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
            // Gửi lại request ban đầu
            return axios(originalRequest);
          })
          .catch((err) => {
            // Xử lý lỗi refresh token
            // Ví dụ: logout người dùng
            window.location.href = "/login";
          });
      } else {
        // Xử lý trường hợp không có refresh token
        // Ví dụ: logout người dùng
        window.location.href = "/login";
        // axiosInstance.post("/auth/logout");
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
