import { useDispatch, useSelector } from "react-redux";
import RangeSlide from "./Components/RangeSlide";
import ThemeToggle from "./Components/ThemeToggle";
import InputNumber from "./Components/InputNumber";
import { Counter } from "./Components/Counter";
import { useLayoutEffect } from "react";
import { setMaxTime } from "./Redux/Redux-actions/CounterActions";
import { setAnswer } from "./Redux/Redux-actions/InputNumberActions";
import Replay from "./Components/Replay";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    counter: { maxTime, times },
    inputNumber: { maxValue, status },
  } = state;
  useLayoutEffect(() => {
    dispatch(setMaxTime(maxValue));
    dispatch(setAnswer(maxValue));
  }, []);
  return (
    <div
      className={`w-screen h-screen theme-${
        state.theme.isLight ? "light" : "dark"
      } fixed top-0 left-0 p-20`}
    >
      <h1>
        {status === null
          ? "Chào mừng bạn đến với trò chơi tư duy cao!"
          : status == 0
          ? "Pingo! Tư duy đỉnh cao đó!"
          : status == -1
          ? "Tăng thêm chút!"
          : "Giảm đi xíu!"}
      </h1>
      <Counter />
      <ThemeToggle />
      <RangeSlide valueOriginal={maxValue} />
      {times == maxTime || status === 0 ? <Replay /> : <InputNumber />}
    </div>
  );
}

export default App;
