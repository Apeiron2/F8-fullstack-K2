import React from "react";

const ProductDetail = ({ params, searchParams }) => {
  console.log(params);
  return (
    <div>
      <h1>Chi tiết sản phẩm: {params.id}</h1>
      {searchParams.page ? <h2>Tìm kiếm: {searchParams.page}</h2> : ""}
    </div>
  );
};

export default ProductDetail;
