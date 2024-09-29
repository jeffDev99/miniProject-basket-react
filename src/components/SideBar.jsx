import React from "react";
import { createQueryObject } from "../helpers/helper";
import { FaListUl } from "react-icons/fa";
import {categories} from "../constants/list"
import styles from "./SideBar.module.css";
export default function SideBar({ query, setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
      <div className={styles.sidebar}>
        <div>
          <FaListUl />
          <p>Categories</p>
        </div>
        <ul onClick={categoryHandler}>
          {categories.map((item) => (
            <li key={item.id} className={item.title.toLowerCase() === query.category ? styles.selected : null}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
  );
}
