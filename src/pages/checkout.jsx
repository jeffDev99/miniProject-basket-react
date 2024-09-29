import React from "react";
import { useCart } from "../context/CartContext";
import BasketCard from "../components/BasketCard";
import styles from "./checkout.module.css";
import BasketSidebar from "../components/BasketSidebar";
export default function checkout() {
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => dispatch({ type, payload });
  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <p>Empty</p>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler}></BasketSidebar>
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
}
