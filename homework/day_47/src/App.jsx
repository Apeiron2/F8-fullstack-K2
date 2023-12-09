import { useSelector } from "react-redux";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  const { isLogin } = useSelector((state) => state.user);
  return <>{isLogin ? <Home /> : <Login />}</>;
}

export default App;
