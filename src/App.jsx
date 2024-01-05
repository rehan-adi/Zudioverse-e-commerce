import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Products from './Components/Products';
import Collection from './Components/Collection';
import Contacj from './Components/Contacj';
import GoToTopButton from './Components/GoToTopButton';
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contacj />} />
        </Routes>
        <GoToTopButton />
        <Footer />
    </>
  );
}

export default App;
