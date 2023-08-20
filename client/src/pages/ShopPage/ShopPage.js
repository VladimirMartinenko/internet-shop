import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProductList from "../../components/ProductList/ProductList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./Shop.module.scss";
import SideBarMobile from "../../components/MobileMeny/SideBarMobile/SideBarMobile";
import CategoryMobile from "../../components/MobileMeny/CategoryMobile/CategoryMobile";

const ShopPage = () => {
  return (
    <div className={classes.main}>
      <Header />
      <SideBarMobile/>
      <CategoryMobile/>
      <div className={classes.body}>
        <SideBar />
        <ProductList />
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default ShopPage;
