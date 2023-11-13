import { client } from "./client";
import { Cookie } from "./cookie";
import config from "./config";
const { EXPIRE_TIME } = config;
export const refreshApiKey = async () => {
  const email = Cookie.get("email");
  const { response, data } = await client.get(`/api-key?email=${email}`);
  if (response.ok) {
    // lấy key thành công
    Cookie.set("email", email, EXPIRE_TIME);
    Cookie.set("apiKey", data.data.apiKey, EXPIRE_TIME);
    client.setApiKey(data.data.apiKey);
    return { response, data };
  } else {
    // lấy key thất bại
    client.setApiKey("");
    return { response, data };
  }
};
