"use server";
import axios from "axios";
import moment from "moment";
import { cookies } from "next/headers";
import Link from "next/link";
import { NextResponse } from "next/server";
import AddMindmap from "./AddMindmap";
import DeleteMindmap from "./DeleteMindmap";
export async function generateMetadata({ params }) {
  return {
    title: "My Mindmaps",
    description: "All user's Mindmaps",
  };
}

const axiosInstance = axios.create({
  baseURL: process.env.HOST,
  headers: { "Content-Type": "application/json" },
});
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const cookieStore = cookies();

    if (cookieStore.get("login_token")) {
      const { accessToken } = JSON.parse(cookieStore.get("login_token").value);
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
  (res) => res,
  async (error) => {
    const { config, response } = error;
    const originalRequest = config;
    if (
      response &&
      response.status === 401 &&
      originalRequest.url !== "/auth/refresh"
    ) {
      let refreshToken;
      if (cookies().get("login_token")) {
        refreshToken = JSON.parse(
          cookies().get("login_token")?.value
        ).refreshToken;
      }
      if (refreshToken) {
        await axiosInstance
          .post("/auth/refresh", {
            refreshToken,
          })
          .then((res) => {
            const { data } = res.data;
            console.log(res);
            cookies().set("login_token", JSON.stringify(data));
            originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
            return axios(originalRequest);
          })
          .catch((error) => {
            cookies().delete("login_token");
            cookies().delete("profile");
            return NextResponse.redirect(new URL("/login", request.url));
          });
      } else {
        cookies().delete("login_token");
        cookies().delete("profile");
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }
  }
);

const MyMindmap = async () => {
  let mindmaps;
  await axiosInstance
    .get("/mindmaps", {
      cache: "no-store",
    })
    .then((res) => {
      mindmaps = res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <>
      <h3 className="mb-3">My mindmaps</h3>
      <AddMindmap />
      <table className="table table-bordered text-center align-middle">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Private</th>
            <th>Created At</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {mindmaps?.map((mindmap, index) => (
            <tr key={index}>
              <td>{mindmap.id}</td>
              <td className="text-start ">
                <div className="d-flex flex-column">
                  <span className="fs-4">{mindmap.title}</span>
                  <span className="fs-6">{mindmap.description}</span>
                </div>
              </td>
              <td>
                {!mindmap.private && (
                  <div
                    className="d-inline-block box bg-primary text-center text-white rounded-1"
                    style={{ width: 20, height: 20 }}
                  >
                    <i className="fa-solid fa-check"></i>
                  </div>
                )}
              </td>
              <td>{moment(mindmap.created_at).format("DD/MM/YYYY HH:MM")}</td>
              <td>
                <a href={"/mindmaps/" + mindmap.id} className="btn btn-warning">
                  Sửa
                </a>
              </td>
              <td>
                <DeleteMindmap />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MyMindmap;
