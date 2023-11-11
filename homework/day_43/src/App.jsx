import React from "react";
import { useSelector, useDispatch } from "./core/hook";
import Login from "./components/Login";
import Shop from "./components/Shop/Shop";
import Loading from "./components/Loading";

function App() {
  const { isLoading, email: isLogin } = useSelector();

  return (
    <div className="app">
      {isLoading ? <Loading /> : isLogin ? <Shop /> : <Login />}
    </div>
  );
}

export default App;
