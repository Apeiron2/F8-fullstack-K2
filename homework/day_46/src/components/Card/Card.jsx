import React from "react";
import "./Card.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../redux/middlewares/productMiddleware";
const Card = ({ product }) => {
  const { _id, name, price, image } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/ProductDetail/${_id}`);
  };
  const handleAdd = () => {
    dispatch(addtoCart(product, 1));
  };
  return (
    <div className="Card">
      <img src={image} alt="Ngân hàng" onClick={handleClick} />
      <h3>{name}</h3>
      <div className="Card-bottom">
        <h2>{`${price} VNĐ`}</h2>
        <button onClick={handleAdd}>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
