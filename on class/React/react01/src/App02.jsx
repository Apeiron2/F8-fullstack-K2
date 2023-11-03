import React from "react";
import User from "./components/Users";
import Image from "./components/Image";
import Posts from "./components/Posts";
import Todo from "./components/Todo";
const Users = [
  {
    id: "1",
    name: "Vũ Đức Tài",
    email: "tai@gmail.com",
    img: "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg",
  },
  {
    id: "2",
    name: "2",
    email: "email2@gmail.com",
    img: "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-2.jpg",
  },
  {
    id: "3",
    name: "3",
    email: "email3@gmail.com",
    img: "https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-3.jpg",
  },
];
const handleGetData = (data) => {
  console.log(data);
};
const App = () => {
  return (
    <div>
      <h1>DANH SÁCH USERS</h1>
      {Users.map((user) => (
        <React.Fragment key={user.id}>
          <User {...user}>
            <Image src={user.img} width="200" height="auto" />
          </User>
          <hr />
        </React.Fragment>
      ))}
      <Posts onGetData={handleGetData} />
      <Todo />
    </div>
  );
};
export default App;
