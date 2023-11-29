"use client";

import { useRouter } from "next/navigation";
import React from "react";

const RefreshButton = () => {
  const router = useRouter();
  const handleClick = async (e) => {
    router.refresh();
  };
  return <button onClick={handleClick}>Refresh</button>;
};

export default RefreshButton;
