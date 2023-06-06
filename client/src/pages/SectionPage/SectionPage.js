import React from 'react';
import SideBarAdmin from '../../components/SideBarAdmin/SideBarAdmin';
import cx from "classnames";
import classes from './SectionPage.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CreateSection from '../../components/SectionAdmin/CreateSection/CreateSection';
import UpdateSection from '../../components/SectionAdmin/UpdateSection/UpdateSection';
import DeleteSection from '../../components/SectionAdmin/DeleteSection/DeleteSection';

const SectionPage = () => {
  return (
    <div div className={cx(classes.main)}>
    <Header/>
    <div  className={cx(classes.body)}>
    <SideBarAdmin/>
    <div className={cx(classes.center)}>
    <CreateSection/>
    <DeleteSection/>
    <UpdateSection/>
    </div>
    </div>
    <div className={cx(classes.footer)}>
    <Footer/>
    </div>
    </div>
    
  );
}

export default SectionPage;
