import React from "react";
import Basket from "../../components/Basket/Basket";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./BasketPage.module.scss";

const BasketPage = (props) => {
  return (
    <div div className={classes.main}>
      <Header />
      <div className={classes.body}>
        <Basket />
      </div>
      <Footer />
    </div>
  );
};

export default BasketPage;
