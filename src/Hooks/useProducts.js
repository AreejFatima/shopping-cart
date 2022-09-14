import { useQuery } from "react-query";
import { fetchProducts } from "../Adapter/adapter";

export default function useProducts() {
  return useQuery("products", () => fetchProducts());
}
