import React from 'react';
import SideBarAdmin from '../../components/SideBarAdmin/SideBarAdmin';
import cx from "classnames";
import classes from './CategoryPage.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CreateCategory from '../../components/CategoryAdmin/CreateCategory/CreateCategory';
import UpdateCategory from '../../components/CategoryAdmin/UpdateCategory/UpdateCategory';
import DeleteCategory from '../../components/CategoryAdmin/DeleteCategory/DeleteCategory';

const CategoryPage = () => {
  return (
    <div div className={cx(classes.main)}>
    <Header/>
    <div  className={cx(classes.body)}>
    <SideBarAdmin/>
    <div className={cx(classes.center)}>
    <CreateCategory/>
    <DeleteCategory/>
    <UpdateCategory/>
    </div>
    </div>
    <div className={cx(classes.footer)}>
    <Footer/>
    </div>
    </div>
    
  );
}

export default CategoryPage;
