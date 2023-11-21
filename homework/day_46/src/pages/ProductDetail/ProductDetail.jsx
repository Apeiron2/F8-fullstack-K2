import React, { useLayoutEffect } from "react";
import "./ProductDetail.scss";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addtoCart,
  getDetail,
} from "../../redux/middlewares/productMiddleware";
import { Loading } from "../../components/Loading/Loading";
const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { detail: product, status } = useSelector((state) => state.product);
  const { name, category, brand, price, description, image } = product;
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(getDetail(id));
  }, []);
  return status == "pending" ? (
    <Loading />
  ) : status == "rejected" ? (
    <h1>Đã có lỗi xảy ra</h1>
  ) : (
    <>
      <div className="ProductDetail">
        <div className="image">
          <img src={image} alt={name} />
        </div>
        <div className="info">
          <h1>{brand}</h1>
          <h2>{name}</h2>
          <p>{description}</p>
          <h3>{`category: ${category}`}</h3>
          <h4>{`${price} VNĐ`}</h4>
          <div className="btn">
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Go home
            </button>
            <button
              onClick={() => {
                dispatch(addtoCart(product, 1));
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
