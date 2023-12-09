"use client";
import React, { useEffect, useRef, useState } from "react";
import "./InternetNoti.scss";
const InternetNoti = () => {
  const elRef = useRef();
  const [online, setOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => setOnline(true));
    window.addEventListener("offline", () => setOnline(false));

    return () => {
      window.removeEventListener("online", () => setOnline(true));
      window.removeEventListener("offline", () => setOnline(false));
    };
  }, []);
  useEffect(() => {
    elRef.current.style.display = "flex";
    setTimeout(() => {
      elRef.current.style.display = "none";
    }, 2000);
  }, [online]);
  return (
    <div id="InternetNoti" ref={elRef}>
      {online ? <p>✔️ Đã kết nối lại!</p> : <p>❌ Mất kết nối!</p>}
    </div>
  );
};

export default InternetNoti;
