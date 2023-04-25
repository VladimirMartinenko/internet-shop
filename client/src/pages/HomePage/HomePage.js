import React from 'react';
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';
import SideBar from '../../components/SideBar/SideBar';
import './Home.module.scss';
import Footer from '../../components/Footer/Footer';
const HomePage = (props) => {
  return (
    <>
    <Header/>
    <SideBar/>
    <ProductList/>
    <Footer/>
    </>
  );
}

export default HomePage;
