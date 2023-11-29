import { client } from "../utils/clientUtils";
import { Cookie } from "../utils/cookieUtils";
export const login = async (email) => {
  const { response, data } = await client.get(`/api-key?email=${email}`);
  if (response.ok) {
    const apiKey = data.data.apiKey;
    client.setApiKey(apiKey);
    Cookie.set("email", email);
    Cookie.set("apiKey", apiKey);
    // localStorage.setItem("cart", JSON.stringify([]));
    const {
      response,
      data: {
        data: {
          emailId: { name },
        },
        message,
      },
    } = await client.get(`/users/profile`);
    if (response.ok) {
      return { response: response, data: name };
    } else {
      return { response: response, data: message };
    }
  } else {
    return { response: response, data: data.message };
  }
};
