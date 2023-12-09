"use client";
import React, { useRef } from "react";
import useSWR from "swr";
import { addTodos } from "../../../service/todoService";
import InternetNoti from "./components/InternetInfo/InternetNoti";

const postApi = "https://jsonplaceholder.typicode.com/posts";
const fetcher = async () => {
  const response = await fetch(postApi);
  return await response.json();
};
const Post = () => {
  const inputRef = useRef();
  const {
    data: posts,
    error,
    isLoading,
    mutate,
  } = useSWR(postApi, fetcher, {
    revalidateOnReconnect: true,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { response, data } = await addTodos({ title: e.target[0].value });
    if (response.ok) {
      console.log("Thêm thành công");
    }
    mutate();
    inputRef.current.value = "";
  };
  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Lỗi</h3>;
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <ul>
        {posts?.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="title..." ref={inputRef} />
        <button>Thêm</button>
      </form>
      <InternetNoti />
    </div>
  );
};

export default Post;
