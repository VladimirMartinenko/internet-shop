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
    <body className={classes.main}>
      <Header />
      <SideBarMobileAdmin />
      <main className={classes.body}>
        <SideBarAdmin />
        <div className={classes.center}>
          <CreateCategory />
          <DeleteCategory />
          <UpdateCategory />
        </div>
      </main>
      <div className={classes.footer}>
        <Footer />
      </div>
    </body>
  );
};

export default CategoryPage;
