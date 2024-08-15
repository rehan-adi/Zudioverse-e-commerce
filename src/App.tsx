import React from 'react';
import Navbar from './Components/Navbar.tsx';
import Footer from './Components/Footer.tsx';
import About from './Components/About.tsx';
import Products from './Components/Products.tsx';
import Collection from './Components/Collection.tsx';
import Contacj from './Components/Contact.tsx';
import GoToTopButton from './Components/GoToTopButton.tsx';
import { Routes, Route } from 'react-router-dom';
import VallyeShorts from './Components/CartProduct/VallyeShorts.tsx';
import Tshirt40s from './Components/CartProduct/Tshirt40s.tsx';
import FannelShirt from './Components/CartProduct/FannelShirt.jsx';
import CoacJacket from './Components/CartProduct/CoacJacket.tsx';
import SwimShort from './Components/CartProduct/SwimShort.tsx';
import CartProduct from './Components/CartProduct.tsx';

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
          <Route path='/Products/FannelShirt' element={<FannelShirt />} />
          <Route path='/Products/CoacJacket' element={<CoacJacket />} />
          <Route path='/Products/SwimShort' element={<SwimShort />} />
        <Route path='/contact' element={<Contacj />} />
        <Route path='/cart' element={<CartProduct />} />
      </Routes>
      <GoToTopButton />
      <Footer />
    </>
  );
}

export default App;
