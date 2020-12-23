import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';
import {productData} from './components/Products/data'

import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './globalStyles';


function App() {
  return (
    <Router>
    <GlobalStyle/>
    <Hero />
    <Products heading = "Our Specials" data={productData}/>
    <Feature/>
    <Footer/>
    </Router>
 
  );
}

export default App;
