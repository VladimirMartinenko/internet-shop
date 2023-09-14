import React, { useState } from "react";
import Product from "../../components/Product/Product";
import classes from "./ProductPage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SideBarMobile from "../../components/MobileMeny/SideBarMobile/SideBarMobile";
import CategoryMobile from "../../components/MobileMeny/CategoryMobile/CategoryMobile";
import TopBlock from "../../components/TopBlock/TopBlock";

const ProductPage = () => {
  const [active, setActive] = useState(false);
  const handlChange = (value) => {
    setActive(value);
  };
  return (
    <body className={classes.main}>
      <Header />
      <SideBarMobile />
      <CategoryMobile />
      <main className={classes.body}>
        <TopBlock change={handlChange} active={active} />
        <Product />
      </main>
      <div className={classes.footer}>
        <Footer />
      </div>
    </body>
  );
};

export default ProductPage;
