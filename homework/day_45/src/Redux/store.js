import { legacy_createStore as CreateStore, combineReducers } from "redux";
import historyReducer from "./Redux-reducers/historyReducer";
import ThemeToggleReducer from "./Redux-reducers/ThemeToggleReducer";
import InputNumberReducer from "./Redux-reducers/InputNumberReducer";
import CounterReducer from "./Redux-reducers/CounterReducer";
const rootReducer = combineReducers({
  history: historyReducer,
  theme: ThemeToggleReducer,
  inputNumber: InputNumberReducer,
  counter: CounterReducer,
});

export const store = CreateStore(rootReducer);
