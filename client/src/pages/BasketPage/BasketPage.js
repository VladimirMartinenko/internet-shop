import React from "react";
import Basket from "../../components/Basket/Basket";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./BasketPage.module.scss";
import SideBarMobile from "../../components/MobileMeny/SideBarMobile/SideBarMobile";
import CategoryMobile from "../../components/MobileMeny/CategoryMobile/CategoryMobile";

const BasketPage = (props) => {
  return (
    <body className={classes.main}>
      <Header />
      <SideBarMobile />
      <CategoryMobile />
      <main className={classes.body}>
        {/* <SideBarMobile/>
        <CategoryMobile/> */}
        <Basket />
      </main>
      <div className={classes.footer}>
        <Footer />
      </div>
    </body>
  );
};

export default BasketPage;
