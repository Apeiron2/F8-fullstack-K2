"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Search = ({ props }) => {
  const router = useRouter();

  const [keywords, setKeywords] = useState(props.keywords);
  const [status, setStatus] = useState(props.status);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newKeywords = e.target[1].value;
    const newStatus = e.target[0].value;
    setKeywords(newKeywords);
    setStatus(newStatus);
    router.push(`?keywords=${newKeywords}&status=${newStatus}`);
  };
  return (
    <>
      <h2>Từ khóa: {keywords}</h2>
      <h2>Trạng thái: {status}</h2>
      <form action="" onSubmit={handleSubmit}>
        <select name="status">
          <option value="all">Tất cả trạng thái</option>
          <option value="active">Kích hoạt</option>
          <option value="inactive">Chưa kích hoạt</option>
        </select>
        <input type="search" name="keywords" placeholder="Từ khóa" />
      </form>
    </>
  );
};

export default Search;
