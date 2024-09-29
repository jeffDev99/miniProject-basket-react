import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";
import styles from "./Products.module.css";
import { categoryProduct, createQueryObject, getInitialQuery, searchProduct } from "../helpers/helper";
import { useSearchParams } from "react-router-dom";

export default function Products() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayedProduct, setDisplayedProduct] = useState([]);
  const [query, setQuery] = useState({});
  const [serachParams, setSerachParams] = useSearchParams();

  useEffect(() => {
    setDisplayedProduct(products);
    setQuery(getInitialQuery(serachParams));
  }, [products]);

  useEffect(() => {
    setSerachParams(query);
    setSearch(query.search || "");
    let findedProducts = searchProduct(products, query.search);
    findedProducts = categoryProduct(findedProducts, query.category);
    setDisplayedProduct(findedProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayedProduct.length && <Loader />}
          {displayedProduct.map((product) => (
            <Card key={product.id} data={product}>
              {product.title}
            </Card>
          ))}
        </div>
        <SideBar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}
