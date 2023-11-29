"use client";
import React from "react";
import useSWR from "swr";
const postApi = "https://jsonplaceholder.typicode.com/posts";
const fetcher = async () => {
  const response = await fetch(postApi);
  return await response.json();
};
const Post = () => {
  const { data, error, isLoading } = useSWR(postApi, fetcher, {
    revalidateOnFocus: false,
  });

  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Lỗi</h3>;
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <ul>
        {data?.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
