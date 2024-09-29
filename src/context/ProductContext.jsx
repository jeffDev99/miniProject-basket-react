import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config.js";

const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
}

const useProductDetails = (id) => {
  const products = useContext(ProductContext);
  const result = products.find((item) => item.id === id);
  return result;
};
const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};
export { useProducts, useProductDetails };
