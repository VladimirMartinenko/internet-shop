import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import ProductList from '../../components/ProductList/ProductList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import cx from "classnames";
import classes from './Shop.module.scss';

const ShopPage = () => {
  return (
    // <div>
    //   <Header/>
    //   <SideBar/>
    //   <ProductList/>
    //   <Footer/>
    // </div>
     <div div className={cx(classes.main)}>
     <Header/>
     <div  className={cx(classes.body)}>
     <SideBar/>
     {/* <div > */}
      <ProductList />
     {/* </div> */}
     </div>
     <Footer/>
     </div>
  );
}

export default ShopPage;
