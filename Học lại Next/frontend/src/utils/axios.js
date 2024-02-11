import { config } from "dotenv";
config();
import axios from "axios";
const instance = axios.create({
  baseURL: process.env.HOST,
  headers: { "Content-Type": "application/json" },
});
export default instance;
