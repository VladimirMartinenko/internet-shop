import React from "react";
import SideBarAdmin from "../../components/SideBarAdmin/SideBarAdmin";
import classes from "./SectionPage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CreateSection from "../../components/SectionAdmin/CreateSection/CreateSection";
import UpdateSection from "../../components/SectionAdmin/UpdateSection/UpdateSection";
import DeleteSection from "../../components/SectionAdmin/DeleteSection/DeleteSection";
import SideBarMobileAdmin from "../../components/MobileMenuAdmin/SideBarMobileAdmin/SideBarMobileAdmin";

const SectionPage = () => {
  return (
    <div className={classes.main}>
      <Header />
      <SideBarMobileAdmin />
      <main className={classes.body}>
        <SideBarAdmin />
        <div className={classes.center}>
          <CreateSection />
          <DeleteSection />
          <UpdateSection />
        </div>
      </main>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default SectionPage;
