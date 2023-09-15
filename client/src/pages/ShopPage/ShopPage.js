import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import ProductList from "../../components/ProductList/ProductList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./Shop.module.scss";
import SideBarMobile from "../../components/MobileMeny/SideBarMobile/SideBarMobile";
import CategoryMobile from "../../components/MobileMeny/CategoryMobile/CategoryMobile";
import TopBlock from "../../components/TopBlock/TopBlock";

const ShopPage = () => {
  const [active, setActive] = useState(false);
  const handlChange = (value) => {
    setActive(value);
  };
  console.log(active);
  return (
    <div className={classes.main} onClick={() => setActive(false)}>
      <Header />
      <SideBarMobile />
      <CategoryMobile />
      <main className={classes.body}>
        {/* <SideBar /> */}
        <TopBlock change={handlChange} active={active} />
        <ProductList />
      </main>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default ShopPage;
