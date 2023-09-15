import React from "react";
import SideBarAdmin from "../../components/SideBarAdmin/SideBarAdmin";
import classes from "./SliderPage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CreateSlider from "../../components/SliderAdmin/CreateSlider/CreateSlider";
import DeleteSlider from "../../components/SliderAdmin/DeleteSlider/DeleteSlider";
import SideBarMobileAdmin from "../../components/MobileMenuAdmin/SideBarMobileAdmin/SideBarMobileAdmin";

const SliderPage = () => {
  return (
    <div className={classes.main}>
      <Header />
      <SideBarMobileAdmin />
      <main className={classes.body}>
        <SideBarAdmin />
        <div className={classes.center}>
          <CreateSlider />
          <DeleteSlider />
        </div>
      </main>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default SliderPage;
