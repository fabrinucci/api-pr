import { Products } from "../interfaces/products";
import { productsApi } from "./index";

export const getProducts = async () => {
  const res = await productsApi.get<Products[]>("/products");
  return res.data;
};
