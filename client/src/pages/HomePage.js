import React from 'react';
import Header from '../components/Header/Header';
import ProductList from '../components/ProductList/ProductList';
import SideBar from '../components/SideBar/SideBar';

const HomePage = (props) => {
  return (
    <>
    <Header/>
    <SideBar/>
    <ProductList/>
      Home
    </>
  );
}

export default HomePage;
