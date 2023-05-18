import React from 'react';
import Product from '../../components/Product/Product';
import cx from "classnames";
import classes from './ProductPage.module.scss';
import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';
import Footer from '../../components/Footer/Footer';

const ProductPage = () => {
  
  return (
    <div div className={cx(classes.main)}>
    <Header/>
    <div  className={cx(classes.body)}>
    {/* <SideBar/> */}
    {/* <div className={cx(classes.center)}> */}
    <Product/>
    {/* </div> */}
    </div>
    <Footer/>
    </div>
    // <div>
    //   <Product/>
    // </div>
  );
}

export default ProductPage;
