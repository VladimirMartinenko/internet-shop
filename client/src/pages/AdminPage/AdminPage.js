import React from "react";
import SideBarAdmin from "../../components/SideBarAdmin/SideBarAdmin";
import classes from "./AdminPage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SideBarMobileAdmin from "../../components/MobileMenuAdmin/SideBarMobileAdmin/SideBarMobileAdmin";

const AdminPage = () => {
  return (
    <div className={classes.main}>
      <Header />
      <SideBarMobileAdmin/>
      <div className={classes.body}>
        <SideBarAdmin />
        <div className={classes.center}>
          <p className={classes.text}>Вітаємо в Адмінпанелі</p>
          <p className={classes.text}>Оберіть пункт меню для редагування</p>
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default AdminPage;
