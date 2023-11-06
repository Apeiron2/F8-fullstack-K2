import { client } from "./client";
export const getApiKey = async (email) => {
  const { response, data } = await client.get(`/api-key?email=${email}`);
  if (response.ok) {
    client.setApiKey(data.data.apiKey);
  }
  return { response, data };
};
