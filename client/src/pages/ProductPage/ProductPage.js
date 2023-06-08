import React from "react";
import Product from "../../components/Product/Product";
import classes from "./ProductPage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ProductPage = () => {
  return (
    <div div className={classes.main}>
      <Header />
      <div className={classes.body}>
        <Product />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
