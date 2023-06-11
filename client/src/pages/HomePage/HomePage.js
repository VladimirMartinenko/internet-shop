import React from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import "./Home.module.scss";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import classes from "./Home.module.scss";
const HomePage = () => {
  return (
    <div div className={classes.main}>
      <Header />
      <div className={classes.body}>
        <SideBar />
        <div className={classes.center}>
          <img
            className={classes.img}
            src="/staticImages/271345139_5121310647879578_4927642615570530009_n.jpg"
            alt="foto"
          ></img>
          <Slider />
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
