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
      <main className={classes.body}>
        <SideBarAdmin />
        <article className={classes.center}>
          <p className={classes.text}>Вітаємо в Адмінпанелі</p>
          <p className={classes.text}>Оберіть пункт меню для редагування</p>
        </article>
      </main>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default AdminPage;
