import { client } from "./client";
import { useDispatch } from "../core/hook";
import { refreshApiKey } from "./apiKey";
const dispatch = useDispatch();
const handleLoading = (boolean) => {
  dispatch({
    type: "loading",
    payload: boolean,
  });
};
const logOut = () => {
  handleLoading(false);
  dispatch({
    type: "login",
    payload: false,
  });
};

export const app = async (callBack) => {
  handleLoading(true);
  const { response, data } = await callBack();
  if (response.ok) {
    handleLoading(false);
    return { response, data };
  } else {
    if (data.message == 401) {
      const { response } = await refreshApiKey();
      if (response.ok) {
        const { response, data } = await callBack();
        handleLoading(false);
        return { response, data };
      } else logOut();
    } else logOut();
  }
};
