import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./context/ProductContext.jsx";
import CartProvider from "./context/CartContext.jsx";
import App from "./App.jsx";
import Layout from "./layout/Layout.jsx";
import "./global.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <CartProvider>
      <ProductProvider>
        <Layout>
          <App />
        </Layout>
      </ProductProvider>
    </CartProvider>
  </BrowserRouter>
  // </StrictMode>
);
