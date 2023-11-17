import React from "react";
import ImageBox from "./components/ImageBox/ImageBox";
import Counter from "./components/counter";
import Input from "./components/Input";
import MoneyTranfer from "./components/MoneyTranfer";

function App() {
  return (
    <div className="p-5">
      {/* <Input label="Họ và tên" />
      <Input label="Email" type="email" />
      <Input label="Mật khẩy" type="password" />
      {/* <Counter /> */}
      {/* <ImageBox /> */}
      <MoneyTranfer />
    </div>
  );
}

export default App;
