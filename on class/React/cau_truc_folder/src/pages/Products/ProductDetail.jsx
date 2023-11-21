import React from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div>
      ProductDetail: {id}
      <Card />
    </div>
  );
};

export default ProductDetail;
