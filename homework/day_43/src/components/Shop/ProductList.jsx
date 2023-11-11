import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "../../core/hook";

const ProductList = () => {
  const { products } = useSelector();
  return (
    <div className="product-list row">
      {products.length ? (
        products.map((product) => {
          const { _id } = product;
          return <ProductCard key={_id} product={product} />;
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ProductList;
