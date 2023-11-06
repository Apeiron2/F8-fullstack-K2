import { client } from "./client";
import { Cookie } from "./cookie";
export const refreshApiKey = async () => {
  const email = Cookie.get("Email");
  const { response, data } = await client.get(`/api-key?email=${email}`);
  if (response.ok) {
    // lấy key thành công
    Cookie.set("Email", email, 5 * 60 * 1000);
    Cookie.set("apiKey", data.data.apiKey, 60 * 1000);
    client.setApiKey(data.data.apiKey);
    return { response, data };
  } else {
    // lấy key thất bại
    return { response, data };
  }
};
