import axiosInstance from "./axios";
export const fetcher = {
  GET: (url) => axiosInstance.get(url).then((res) => res.data),
  POST: (url, data) => axiosInstance.post(url, data).then((res) => res),
};
