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
      <Header/>
      <SideBarMobile/>
      <CategoryMobile/>
      <div className={classes.body}>
        <div className={classes.section_with_menu} >
        <SideBar />
        <div className={classes.center}>
          {/* <img
            className={classes.img}
            src="/staticImages/271345139_5121310647879578_4927642615570530009_n.jpg"
            alt="foto"
          ></img> */}
          <ImageGalery/>
          {/* <Slider /> */}
         
        </div>
        </div>
        {/* <div> */}
          <SliderProduct/>
          {/* </div> */}
          <About/>
      </div>
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
