import React from "react";
import Basket from "../../components/Basket/Basket";
import { useDispatch } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import cx from "classnames";
import classes from './BasketPage.module.scss';

const BasketPage = (props) => {
  return (
    // <>
    //  <Basket/>
    // </>
    <div div className={cx(classes.main)}>
      <Header />
      <div className={cx(classes.body)}>
        <Basket />
      </div>
      <Footer />
    </div>
  );
};

export default BasketPage;
