import Loading from "./components/Loading";
import Login from "./components/Login";
import { useSelector } from "./core/hook";

function App() {
  const { isLoading } = useSelector();
  return <>{isLoading ? <Loading /> : <Login />}</>;
}

export default App;
