import React from "react";
import SideBarAdmin from "../../components/SideBarAdmin/SideBarAdmin";
import classes from "./ProductAdminPage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CreateProduct from "../../components/ProductAdmin/CreateProduct/CreateProduct";
import DeleteProduct from "../../components/ProductAdmin/DeleteProduct/DeleteProduct";
import UpdateProduct from "../../components/ProductAdmin/UpdateProduct/UpdateProduct";
import SideBarMobileAdmin from "../../components/MobileMenuAdmin/SideBarMobileAdmin/SideBarMobileAdmin";

const ProductAdminPage = () => {
  return (
    <div className={classes.main}>
      <Header />
      <SideBarMobileAdmin/>
      <div className={classes.body}>
        <SideBarAdmin />
        <div className={classes.center}>
          <CreateProduct />
          <DeleteProduct />
          <UpdateProduct />
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default ProductAdminPage;
