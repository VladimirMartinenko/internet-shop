import React from "react";
import Product from "../../components/Product/Product";
import classes from "./ProductPage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ProductPage = () => {
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.body}>
        <Product />
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;
