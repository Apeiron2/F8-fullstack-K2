"use client";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import instance from "@/utils/axios";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header = async () => {
  const { user } = useUser;
  const pathname = usePathname();
  const clsxNavLink = (href) => {
    const className = clsx("nav-link px-2 text-decoration-none", {
      active: pathname.startsWith(href),
    });
    return className;
  };
  return (
    <header
      style={{ height: "8vh" }}
      className="row d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
    >
      <div className="col-md-3 mb-2 mb-md-0">
        <Link
          href="/"
          className="d-inline-flex text-decoration-none fs-4 text-primary fw-bold"
        >
          Mindmap Flow
        </Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 nav-pills gap-3">
        <li className="nav-item">
          <Link href="/" className={clsxNavLink("/users")}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/features" className={clsxNavLink("/features")}>
            Features
          </Link>
        </li>
        <li>
          <Link href="/pricing" className={clsxNavLink("/pricing")}>
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/about" className={clsxNavLink("/about")}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className={clsxNavLink("/contact")}>
            Contact
          </Link>
        </li>
      </ul>

      {user ? (
        <div className="col-md-3 text-end d-flex align-items-center">
          <span className="text-start">Hi, {user.name}</span>
          <Link
            href="/mindmap"
            className="text-primary fw-bold fs-5 text-decoration-none mx-3"
          >
            Mindmap
          </Link>
          <Link href="/logout" className="btn btn-danger">
            Logout
          </Link>
        </div>
      ) : (
        <div className="col-md-3 text-end">
          <Link href="/login" className="btn btn-outline-primary me-2">
            Login
          </Link>
          <Link href="/register" className="btn btn-primary">
            Sign-up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
