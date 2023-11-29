"use client";
import Link from "next/link";
import React from "react";
import "@/assets/style.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul>
        <li className={clsx(pathname === "/" && "active")}>
          <Link href="/">Trang chủ</Link>
        </li>
        <li className={clsx(pathname === "/about" && "active")}>
          <Link href="/about">Giới thiệu</Link>
        </li>
        <li className={clsx(pathname === "/post" && "active")}>
          <Link href="/post">Bài viết</Link>
        </li>
        <li className={clsx(pathname === "/products" && "active")}>
          <Link href="/products">Sản phẩm</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
