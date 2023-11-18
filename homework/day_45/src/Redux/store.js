import { legacy_createStore as CreateStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import HistoryReducer from "./Redux-reducers/HistoryReducer";
import ThemeToggleReducer from "./Redux-reducers/ThemeToggleReducer";
import InputNumberReducer from "./Redux-reducers/InputNumberReducer";
import CounterReducer from "./Redux-reducers/CounterReducer";
const rootReducer = combineReducers({
  history: HistoryReducer,
  theme: ThemeToggleReducer,
  inputNumber: InputNumberReducer,
  counter: CounterReducer,
});

export const store = CreateStore(rootReducer, composeWithDevTools());
