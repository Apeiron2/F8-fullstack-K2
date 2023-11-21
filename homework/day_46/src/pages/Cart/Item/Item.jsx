import React, { useState } from "react";
import "./Item.scss";
import { useDispatch } from "react-redux";
import {
  addtoCart,
  deleteinCart,
} from "../../../redux/middlewares/productMiddleware";
import { useNavigate } from "react-router-dom";

const Item = ({ quantity: _quantity, product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, image, name, brand, price, quantity } = product;
  const [left, setLeft] = useState(quantity - _quantity);
  const [value, setValue] = useState(_quantity);
  const increment = () => {
    if (left != 1) {
      setValue(value + 1);
      setLeft(left - 1);
      dispatch(addtoCart(product, 1));
    }
  };
  const decrement = () => {
    if (value != 1) {
      setValue(value - 1);
      setLeft(left + 1);
      dispatch(addtoCart(product, -1));
    }
  };
  const handleDelete = () => {
    dispatch(deleteinCart(_id));
  };
  return (
    <div className="Item">
      <div>
        <div className="counter">
          <img
            src={image}
            alt={name}
            onClick={() => {
              navigate(`/ProductDetail/${_id}`);
            }}
          />
          <div>
            <button onClick={decrement}>-</button>
            <span>{value}</span>
            <button onClick={increment}>+</button>
          </div>
        </div>
        <div className="info">
          <div>
            <h1>{brand}</h1>
            <h2>{name}</h2>
          </div>
          <h3>{`Giá: ${price} VNĐ`}</h3>
          <h3>{`Còn lại: ${left}`}</h3>
        </div>
      </div>
      <div className="total">
        <h3>{`${price * value} VNĐ`}</h3>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Item;
