import React from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";
export default function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to={"/products"}>BotoShop</Link>
        <Link to={"/checkout"}>
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by jeffDev99</p>
      </footer>
    </>
  );
}
