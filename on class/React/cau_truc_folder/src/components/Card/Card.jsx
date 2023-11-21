import React from "react";
import "./Card.scss";
const Card = () => {
  return (
    <div className="card">
      <img src="https://picsum.photos/300/300" alt="" />
      <div className="card-bottom">
        <div className="info">
          <h3>Tên sản phẩm</h3>
          <h5>Giá: 10000 VND</h5>
        </div>
        <button>Mua</button>
      </div>
    </div>
  );
};

export default Card;
