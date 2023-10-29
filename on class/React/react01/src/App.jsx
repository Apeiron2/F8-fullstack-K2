import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const title = "Học react";
  const notification = (text) => {
    console.log(text);
  };
  const isLogin = false;
  const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
  ];
  return (
    <div>
      <Header />
      {isLogin && <h3>Xin chào!</h3>}
      <h1>{title}</h1>
      {users.map(({ id, name }) => {
        return <h3 key={id}>{name}</h3>;
      })}
      <Footer />
      <button
        style={{
          marginTop: "30px",
        }}
        onClick={() => {
          notification("Nhấp mạnh lên");
        }}
      >
        Nhấp
      </button>
    </div>
  );
}

// Muốn không có thẻ bọc có thể dùng Fragment
// Có thể dùng React.fragment hoặc không thì {Fragment} từ "react" luôn

// Cú pháp:
/** 
 <Fragment>
 {Nội dung gì đấy}
 </Fragment>
 */
