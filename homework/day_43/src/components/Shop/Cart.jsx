import React from "react";
import { useDispatch, useSelector } from "../../core/hook";
import { client } from "../../helper/client";
import { refreshApiKey } from "../../helper/apiKey";

const Cart = () => {
  const { cart } = useSelector();
  const dispatch = useDispatch();
  const handleOrder = async () => {
    if (cart.length) {
      dispatch({
        type: "loading",
        payload: true,
      });
      const { response } = await client.post("/order", cart);
      if (response.ok) {
        localStorage.clear();
        dispatch({
          type: "cart/update",
          payload: [],
        });
        dispatch({
          type: "loading",
          payload: false,
        });
        alert("Đã mua thành công");
      } else {
        const { response } = await refreshApiKey();
        if (response.ok) {
          const { response } = client.post("/order", cart);
          if (response.ok) {
            localStorage.clear();
            dispatch({
              type: "cart/update",
              payload: [],
            });
            dispatch({
              type: "loading",
              payload: false,
            });
            alert("Đã mua thành công");
          } else {
            dispatch({
              type: "loading",
              payload: false,
            });
            dispatch({
              type: "login",
              payload: false,
            });
          }
        } else {
          dispatch({
            type: "loading",
            payload: false,
          });
          dispatch({
            type: "login",
            payload: false,
          });
        }
      }
    } else alert("Không có đơn hàng nào!");
  };
  return (
    <div className="row mt-3">
      {cart ? (
        <React.Fragment>
          <table className="cart col-12 table table-bordered">
            <thead className="table-secondary text-center">
              <tr>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Tổng tiền</th>
              </tr>
            </thead>
            <tbody className="table-light">
              {cart.map(({ _id, name, quantity, price }) => (
                <tr key={_id}>
                  <td>{name}</td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td>{price * quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="col-12 btn btn-primary w-25" onClick={handleOrder}>
            Thanh toán
          </button>
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
