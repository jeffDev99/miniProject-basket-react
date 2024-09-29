import { Navigate, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/products"} replace/>}/>
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Details />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
