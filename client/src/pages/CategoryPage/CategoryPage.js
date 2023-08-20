import React from "react";
import SideBarAdmin from "../../components/SideBarAdmin/SideBarAdmin";
import classes from "./CategoryPage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CreateCategory from "../../components/CategoryAdmin/CreateCategory/CreateCategory";
import UpdateCategory from "../../components/CategoryAdmin/UpdateCategory/UpdateCategory";
import DeleteCategory from "../../components/CategoryAdmin/DeleteCategory/DeleteCategory";
import SideBarMobileAdmin from "../../components/MobileMenuAdmin/SideBarMobileAdmin/SideBarMobileAdmin";

const CategoryPage = () => {
  return (
    <div className={classes.main}>
      <Header />
      <SideBarMobileAdmin/>
      <div className={classes.body}>
        <SideBarAdmin />
        <div className={classes.center}>
          <CreateCategory />
          <DeleteCategory />
          <UpdateCategory />
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default CategoryPage;
