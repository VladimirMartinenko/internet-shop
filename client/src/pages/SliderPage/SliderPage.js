import React from 'react';
import SideBarAdmin from '../../components/SideBarAdmin/SideBarAdmin';
import cx from "classnames";
import classes from './SliderPage.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CreateSlider from '../../components/SliderAdmin/CreateSlider/CreateSlider';
import DeleteSlider from '../../components/SliderAdmin/DeleteSlider/DeleteSlider';

const SliderPage = () => {
  return (
    <div div className={cx(classes.main)}>
    <Header/>
    <div  className={cx(classes.body)}>
    <SideBarAdmin/>
    <div className={cx(classes.center)}>
    <CreateSlider/>
    <DeleteSlider/>
    </div>
    </div>
    <Footer/>
    </div>
    
  );
}

export default SliderPage;
