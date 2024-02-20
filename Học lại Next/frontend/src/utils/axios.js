"use client";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: process.env.HOST,
  headers: { "Content-Type": "application/json" },
});
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const { accessToken } = JSON.parse(localStorage.getItem("login_token"));
    if (accessToken) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;
    const originalRequest = config;
    if (response && response.status === 401) {
      // Refresh token
      const { refreshToken } = JSON.parse(localStorage.getItem("login_token"));
      if (refreshToken) {
        // Gọi API refresh token
        return axios
          .post("/api/auth/refresh", {
            refreshToken,
          })
          .then((res) => {
            const { data } = res.data;
            localStorage.setItem("login_token", data);
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
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
