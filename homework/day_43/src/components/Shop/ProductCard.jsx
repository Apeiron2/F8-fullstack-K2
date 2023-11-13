import React, { useState } from "react";
import { useDispatch, useSelector } from "../../core/hook";

const ProductCard = ({ product }) => {
  const { cart } = useSelector();
  const dispatch = useDispatch();
  const { _id: id, name, price, image, quantity } = product;
  const handleLeft = () => {
    let left = quantity;
    cart?.forEach((product) => {
      if (product._id == id) {
        left = quantity - product.quantity;
      }
    });
    return left;
  };
  const [left, setLeft] = useState(handleLeft());
  const handleAdd = () => {
    setLeft(left - 1);
    const updateCart = new Promise((resolve, reject) => {
      cart?.forEach((product) => {
        if (product._id == id) {
          product.quantity++;
          resolve();
        }
      });
      reject();
    });

    updateCart
      .then(() => {})
      .catch(() => {
        cart?.push({ ...product, quantity: 1 });
      })
      .finally(() => {
        const newCart = cart?.map((item) => ({ ...item, productId: item._id }));
        localStorage.setItem("cart", JSON.stringify(newCart));
        dispatch({
          type: "cart/update",
          payload: newCart,
        });
      });
  };

  return (
    <div className="col-3 p-2" id={id}>
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price}</p>
          </div>
          <div>
            <p>Còn: {left}</p>
            <button
              data-id-product={id}
              className="btn btn-primary p-3"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
