import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import classes from "./Home.module.scss";
import SideBarMobile from "../../components/MobileMeny/SideBarMobile/SideBarMobile";
import CategoryMobile from "../../components/MobileMeny/CategoryMobile/CategoryMobile";
import ImageGalery from "../../components/ImageGalery/ImageGalery";
import SliderProduct from "../../components/SliderProduct/SliderProduct";
import About from "../../components/About/About";

const HomePage = () => {
  //   const [menuActive,setMenuActive] = useState(false);
  //   function active (data){
  //     setMenuActive(data)
  // }
  // console.log (menuActive)
  return (
    <div className={classes.main}>
      <Header />
      <SideBarMobile />
      <CategoryMobile />
      <main className={classes.body}>
        <div className={classes.section_with_menu}>
          {/* <div className={classes.center}> */}
          <SideBar />

          {/* <img
            className={classes.img}
            src="/staticImages/271345139_5121310647879578_4927642615570530009_n.jpg"
            alt="foto"
          ></img> */}
          <ImageGalery />
          {/* <Slider /> */}

          {/* </div> */}
        </div>
        {/* <div> */}
        <SliderProduct />
        {/* </div> */}
        <About />
      </main>
      {/* <div>
      <Slider /> 
      </div> */}
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
