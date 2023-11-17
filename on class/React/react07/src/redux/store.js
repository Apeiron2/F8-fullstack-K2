import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { counterReducer } from "./redux-reducer/counterReducer";
import { todoReducer } from "./redux-reducer/todoReducer";
const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
