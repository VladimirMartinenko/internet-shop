import React from 'react';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import './Home.module.scss';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import cx from "classnames";
import classes from './Home.module.scss';
const HomePage = () => {
  return (
    <div div className={cx(classes.main)}>
    <Header/>
    <div  className={cx(classes.body)}>
    <SideBar/>
    <div className={cx(classes.center)}>
     <img  className={cx(classes.img)} src='/staticImages/271345139_5121310647879578_4927642615570530009_n.jpg' alt='foto'></img>
    <Slider/>
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default HomePage;
