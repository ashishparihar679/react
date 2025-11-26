import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './Page1';
import Dashboard from './Dashboard';
import Nav from './Nav';
import Superdashboard from './superdashboard';
import Product from './Product';
import Update from './Update';
import Practice from './Practice';
import Pra from './Pra';
import Pra2 from '../../3practice/src/Pra2';
import Rev from './rev';
import Home1 from './Home1';

function App() {
  return (
    <>
    
  <BrowserRouter>
      <Nav />
      {/* <Update /> */}
      {/* <Dashboard/> */}
      {/* <Page1 /> */}
      {/* <Superdashboard/> */}
      {/* <Product/> */}
      
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/superdashboard" element={<Superdashboard/>} />
        <Route path="/Update" element={<Update/>} />
        <Route path="/Practice" element={<Practice/>} />
        <Route path="/Pra" element={<Pra/>} />
        <Route path="/Pra2" element={<Pra2/>} />
        <Route path="/rev" element={<Rev/>} />
        <Route path="/home1" element={<Home1/>} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
