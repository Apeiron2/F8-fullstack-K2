import React, { useEffect } from "react";
import "./Products.scss";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/middlewares/productMiddleware";
import { Loading } from "../../components/Loading/Loading";

const Products = () => {
  const { products, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="Products">
      {status == "pending" ? (
        <Loading />
      ) : status == "rejected" ? (
        <h1>Đã có lỗi xảy ra</h1>
      ) : (
        <>
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </>
      )}
    </div>
  );
};

export default Products;
