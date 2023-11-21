import React from "react";
import Item from "./Item/Item";
import "./Cart.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.product.cart);
  const handleOrder = () => {
    console.log("Order");
  };
  return (
    <div className="Cart">
      {cart.length ? (
        cart.map(({ productId, quantity, product }) => (
          <Item key={productId} product={product} quantity={quantity} />
        ))
      ) : (
        <h1>Không có sản phẩm nào</h1>
      )}
      <div className="Cart-bottom">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button onClick={handleOrder}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
