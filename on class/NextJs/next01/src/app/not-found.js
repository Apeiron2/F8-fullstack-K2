import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>Tìm cái gì ở đây?</h1>
      <h2>Đi về</h2>

      <Link href="/">Về trang chủ</Link>
    </div>
  );
};

export default NotFound;
