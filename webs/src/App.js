import React from 'react'
import './App.css';

import Navbar from './Pages/Navbar';
import Intro from './Pages/intro';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Footer/>
    </div>
  );
}

export default App;
