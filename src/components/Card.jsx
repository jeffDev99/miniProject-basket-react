import React from "react";
import { Link } from "react-router-dom";
import { shortenText, productQuantity } from "../helpers/helper";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { useCart } from "../context/CartContext";
import styles from "./Card.module.css";

export default function Card({ data }) {
  const { id, title, image, price } = data;

  const [state, dispatch] = useCart();

  const quantity = productQuantity(state, id);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => clickHandler("REMOVE_ITEM")}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && <button onClick={() => clickHandler("DECREASE_ITEM")}>-</button>}
          {!!quantity && <span>{quantity}</span>}

          {quantity === 0 ? (
            <button onClick={() => clickHandler("ADD_ITEM")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE_ITEM")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}
