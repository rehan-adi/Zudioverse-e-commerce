// App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Contacj from './Components/Contacj';
import TextAnimation from './Components/TextAnimation';
import Collection from './Components/Collection';
import Brands from './Components/Brands';
import Company from './Components/Company';
import BigImage from './Components/BigImage';
import SlidingText from './Components/SlidingText';
import GoToTopButton from './Components/GoToTopButton';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Products />
      <TextAnimation />
      <Collection />
      <Brands />
      <Company /> 
      <BigImage />
      <SlidingText />
      <Contacj />
      <GoToTopButton />
      <Footer />
    </>
  );
}

export default App;
