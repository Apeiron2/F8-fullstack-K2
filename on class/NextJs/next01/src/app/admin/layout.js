import React from "react";
export const metadata = {
  title: "Trang quản trị",
};
const AdminLayout = ({ children }) => {
  return (
    <React.Fragment>
      <header>
        <h1>Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </React.Fragment>
  );
};

export default AdminLayout;
