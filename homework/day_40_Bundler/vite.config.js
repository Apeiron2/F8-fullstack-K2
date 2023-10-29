import { defineConfig } from "vite";
import dotenv from "dotenv";
dotenv.config();
export default defineConfig({
  server: {
    host: process.env.HOST,
    port: process.env.PORT,
    open: "index.html",
  },
});
