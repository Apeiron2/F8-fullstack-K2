import React from "react";

const User = ({ id, name, email, children }) => {
  return (
    <div>
      {children}
      <div>
        <h2>Thông tin user {id}</h2>
        <h3>Tên: {name}</h3>
        <h3>Email: {email}</h3>
      </div>
    </div>
  );
};
export default User;
