import React from "react";
import Search from "./components/Search";
export const metadata = {
  title: "Danh sách sản phẩm",
};
const Products = ({ searchParams }) => {
  return (
    <div>
      <h1>Sản phẩm</h1>
      <Search props={searchParams} />
    </div>
  );
};

export default Products;
