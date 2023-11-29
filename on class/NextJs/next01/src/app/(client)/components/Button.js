"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Button = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/admin");
  };
  return <button onClick={handleClick}>Nhấp vào</button>;
};

export default Button;
