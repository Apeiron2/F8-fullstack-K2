// Custom Hook
import { ProviderContext } from "./Provider";
import { useContext } from "react";
export const useSelector = () => {
  const { state } = useContext(ProviderContext);
  return state;
};
export const useDispatch = () => {
  const { dispatch } = useContext(ProviderContext);
  return dispatch;
};
