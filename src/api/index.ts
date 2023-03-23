import axios from "axios";

export const productsApi = axios.create({
  baseURL: "https://api-pr.up.railway.app",
});
