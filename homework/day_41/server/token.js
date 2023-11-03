import { client } from "./client.js";
export const requestRefresh = async (refreshToken) => {
  const token = await client.post("/auth/refresh-token", {
    refreshToken,
  });
  return token;
};
