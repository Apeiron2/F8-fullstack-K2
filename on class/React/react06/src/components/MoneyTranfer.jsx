import React, { useState } from "react";

const MoneyTranfer = () => {
  const [cost, setCost] = useState(0);
  const [histories, setHistories] = useState([]);
  const handleChange = (e) => {
    setCost(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCost();
    setHistories([...histories, +cost]);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập số tiền..."
          onChange={handleChange}
          value={cost}
        />
        <button>Add</button>
      </form>
      <h2 className="py-5">Lịch sử chuyển tiền</h2>
      {histories.map((item, index) => (
        <h3 key={index}>{item.toLocaleString()}</h3>
      ))}
      <h2 className="pt-5">
        <span>Tổng tiền: </span>
        {histories
          .reduce((prev, current) => {
            return prev + current;
          }, 0)
          .toLocaleString()}
      </h2>
    </div>
  );
};

export default MoneyTranfer;
