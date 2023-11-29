import React from "react";
import Link from "next/link";

const getPost = async () => {
  const respone = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await respone.json();
  return { respone, data };
};
const Posts = async ({ params }) => {
  const { data: list } = await getPost();
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      {list.map(({ id, title }) => (
        <div key={id}>
          <h2>{title}</h2>
          <Link href={`/post/${id}`}>Chi tiết</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
