import React from "react";
const getPost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return data;
};
const PostDetail = async ({ props }) => {
  const post = await getPost(props.id);
  return <div>PostDetail: {post}</div>;
};

export default PostDetail;
