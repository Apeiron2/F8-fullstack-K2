import React from "react";
import FlowProvider from "@/components/mindmap/FlowProvider";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import Link from "next/link";
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
export async function generateMetadata({ params }) {
  const { id } = params;
  let mindmap;
  await axiosInstance
    .get(`${process.env.HOST}/mindmaps/${id}`)
    .then((res) => {
      if (res.status == 200) {
        mindmap = res?.data?.data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    title: mindmap?.title ? mindmap?.title : "Not Found",
    description: mindmap?.description ? mindmap?.description : "Page Not Found",
  };
}
const Mindmap = async ({ params }) => {
  const { id } = params;
  let mindmap;
  let edit;
  await axiosInstance
    .get(`${process.env.HOST}/mindmaps/${id}`)
    .then((res) => {
      if (res.status == 200) {
        mindmap = res?.data?.data;
        edit = res.data?.edit;
      }
    })
    .catch((err) => {});
  return (
    <div style={{ height: "80vh" }} className="mb-5">
      {mindmap ? (
        <FlowProvider mindmap={mindmap} edit={edit} />
      ) : (
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3">
              {" "}
              <span className="text-danger">Opps!</span> Page not found.
            </p>
            <p className="lead">The page you’re looking for doesn’t exist.</p>
            <Link href="/" className="btn btn-primary">
              Go Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mindmap;
