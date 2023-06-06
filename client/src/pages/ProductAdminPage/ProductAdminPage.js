import React from 'react';
import SideBarAdmin from '../../components/SideBarAdmin/SideBarAdmin';
import cx from "classnames";
import classes from './ProductAdminPage.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CreateProduct from '../../components/ProductAdmin/CreateProduct/CreateProduct';
import DeleteProduct from '../../components/ProductAdmin/DeleteProduct/DeleteProduct';
import UpdateProduct from '../../components/ProductAdmin/UpdateProduct/UpdateProduct';

const ProductAdminPage = () => {
  return (
    <div div className={cx(classes.main)}>
    <Header/>
    <div  className={cx(classes.body)}>
    <SideBarAdmin/>
    <div className={cx(classes.center)}>
    <CreateProduct/>
    <DeleteProduct/>
    <UpdateProduct/>
    </div>
    </div>
    <div className={cx(classes.footer)}>
    <Footer/>
    </div>
    </div>
    
  );
}

export default ProductAdminPage;