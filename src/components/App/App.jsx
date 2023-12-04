import React, { useEffect } from 'react'
import AppRoutes from './../Routes/Routes';
import Header from './../Header/Header';
import Sidebar from './../Sidebar/Sidebar';
import Footer from './../Footer/Footer';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../features/categories/categoriesSlice';
import { getProducts } from '../../features/products/productsSlice';
import UserForm from '../User/UserForm';
import Poster from './../Poster/Poster';

import NavState from '../../context/navState';
import MainMenu from '../MainMenu';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());

  }, [dispatch])

  const ResponsiveMenu = () => {
    const isMobile = window.innerWidth <= 768;
  
    return (
      <div>
        {isMobile ?
        <NavState>
        <MainMenu />
        </NavState>
        : 
        <Header />}
      </div>
    );
  };
  
  
  return ( 
    <div className='app'>
      
      <ResponsiveMenu />
      <UserForm />
      <div className='container'> 
        
        {/* <Poster /> */}
        <Sidebar />
        <AppRoutes />
      </div>
    <Footer />
    </div> 
  );
}

export default App;