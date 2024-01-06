import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Products from './Components/Products';
import Collection from './Components/Collection';
import Contacj from './Components/Contacj';
import GoToTopButton from './Components/GoToTopButton';
import { Routes, Route } from 'react-router-dom';
import VallyeShorts from './Components/CartProduct/VallyeShorts';
import Tshirt40s from './Components/CartProduct/Tshirt40s';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/Products' element={<Products />} />
          <Route path='/Products/VallyeShorts' element={<VallyeShorts />} />
          <Route path='/Products/Tshirt40s' element={<Tshirt40s />} />
        <Route path='/contact' element={<Contacj />} />
      </Routes>
      <GoToTopButton />
      <Footer />
    </>
  );
}

export default App;
