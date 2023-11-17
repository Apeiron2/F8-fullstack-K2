import { useSelector } from "react-redux";
import RangeSlide from "./Components/RangeSlide";
import ThemeToggle from "./Components/ThemeToggle";
import InputNumber from "./Components/InputNumber";
import { Counter } from "./Components/Counter";

function App() {
  const theme = useSelector((state) => state.theme.isLight);
  return (
    <div
      className={`w-screen h-screen theme-${
        theme ? "light" : "dark"
      } fixed top-0 left-0 p-20`}
    >
      <h1>Chào mừng bạn đến với trò chơi tư duy cao!</h1>
      <Counter />
      <ThemeToggle />
      <RangeSlide />
      <InputNumber />
    </div>
  );
}

export default App;
