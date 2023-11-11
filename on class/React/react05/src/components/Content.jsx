import React from "react";
import { useContext } from "react";
import { MyContext } from "../App";
export default function Content() {
  const { state } = useContext(MyContext);
  return (
    <div className="content">
      <h3>Đang sử dụng theme: {state.theme}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
        temporibus cumque, incidunt impedit cum voluptatum vel quam ipsa
        provident, ut doloribus laboriosam assumenda nesciunt recusandae eum
        alias rem architecto natus?
      </p>
    </div>
  );
}
