import React from 'react';
import SideBarAdmin from '../../components/SideBarAdmin/SideBarAdmin';
import cx from "classnames";
import classes from './AdminPage.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AdminPage = () => {
  return (
    <div div className={cx(classes.main)}>
    <Header/>
    <div  className={cx(classes.body)}>
    <SideBarAdmin/>
    <div className={cx(classes.center)}>
    <p className={cx(classes.text)}>Вітаємо в Адмінпанелі</p>
    <p className={cx(classes.text)}>Оберіть пункт меню для редагування</p>
    </div>
    </div>
    <Footer/>
    </div>
    
  );
}

export default AdminPage;
