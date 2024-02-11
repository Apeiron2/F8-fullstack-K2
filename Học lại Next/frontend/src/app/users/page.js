import React from "react";
import instance from "@/utils/axios";

const Users = async () => {
  const { data } = await instance.get("/users");
  const users = data.data;
  return (
    <>
      <h1>Users</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status ? "Đang hoạt động" : "Ngừng hoạt động"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Users;
