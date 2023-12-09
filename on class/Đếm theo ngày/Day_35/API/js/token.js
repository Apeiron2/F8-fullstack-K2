import { client } from "./client.js";
client.setUrl("https://api.escuelajs.co/api/v1");
export const requestRefresh = async (refreshToken) => {
  const token = await client.post("/auth/refresh-token", {
    refreshToken,
  });
  console.log(token);
};
