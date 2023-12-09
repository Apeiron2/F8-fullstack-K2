import { client } from "../utils/clientUtils";
import { Cookie } from "../utils/cookieUtils";

export const login = async (email) => {
  const { response, data } = await client.get(`/api-key?email=${email}`);
  if (response.ok) {
    client.setApiKey(data.data.apiKey);
    Cookie.set("email", email);
    Cookie.set("apiKey", data.data.apiKey);
  }

  return { response, data };
};
