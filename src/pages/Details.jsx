import React from "react";
import { useParams } from "react-router-dom";
import { useProductDetails } from "../context/ProductContext";
import Loader from "../components/Loader";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Details.module.css";

export default function Details() {
  const { id } = useParams();
  const productDetails = useProductDetails(+id);
  if (!productDetails) {
    return <Loader />;
  }
  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.info}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.desc}>{productDetails.description}</p>
        <p className={styles.cat}>
          <SiOpenproject />
          {productDetails.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {productDetails.price}   $
          </span>
        
          <Link>
            <FaArrowLeft />
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
