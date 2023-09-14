import React from "react";
import SideBarAdmin from "../../components/SideBarAdmin/SideBarAdmin";
import classes from "./AdminOrderPage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GetOrder from "../../components/OrderAdmin/GetOrder/GetOrder";
import SideBarMobileAdmin from "../../components/MobileMenuAdmin/SideBarMobileAdmin/SideBarMobileAdmin";

const AdminOrderPage = () => {
  return (
    <body className={classes.main}>
      <Header />
      <SideBarMobileAdmin />
      <main className={classes.body}>
        <SideBarAdmin />
        <div className={classes.center}>
          <GetOrder />
        </div>
      </main>
      <div className={classes.footer}>
        <Footer />
      </div>
    </body>
  );
};

export default AdminOrderPage;
