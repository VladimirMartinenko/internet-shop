import React from 'react';
import SideBarAdmin from '../../components/SideBarAdmin/SideBarAdmin';
import cx from "classnames";
import classes from './AdminOrderPage.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GetOrder from '../../components/OrderAdmin/GetOrder/GetOrder';


const AdminOrderPage = () => {
  return (
    <div div className={cx(classes.main)}>
    <Header/>
    <div  className={cx(classes.body)}>
    <SideBarAdmin/>
    <div className={cx(classes.center)}>
    <GetOrder/>
    </div>
    </div>
    <div className={cx(classes.footer)}>
    <Footer/>
    </div>
    </div>
    
  );
}

export default AdminOrderPage;