import React from "react";
import Item from "./Item/Item";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { orderCart } from "../../redux/middlewares/productMiddleware";
import { Loading } from "../../components/Loading/Loading";
const Cart = () => {
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.product.cart);
  const handleOrder = () => {
    dispatch(orderCart(cart));
  };
  return (
    <div className="Cart">
      {status == "pending" ? (
        <Loading />
      ) : status == "reject" ? (
        <h1>Đã có lỗi xảy ra</h1>
      ) : cart.length ? (
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
