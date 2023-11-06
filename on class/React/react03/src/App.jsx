import Dola from "./components/Dola";
import VND from "./components/VND";
import "./App.scss";
import { useEffect, useState } from "react";
function App() {
  return (
    <div className="App">
      <h1>Đổi tiền $ to VNĐ</h1>
      <div>
        <Dola />
        ↔️
        <VND />
      </div>
    </div>
  );
}

export default App;
