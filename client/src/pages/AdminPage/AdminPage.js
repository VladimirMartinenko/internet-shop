import React from "react";
import SideBarAdmin from "../../components/SideBarAdmin/SideBarAdmin";
import classes from "./AdminPage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const AdminPage = () => {
  return (
    <div div className={classes.main}>
      <Header />
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
