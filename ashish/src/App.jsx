import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './Page1';
import Dashboard from './Dashboard';
import Nav from './Nav';
import Superdashboard from './superdashboard';
import Product from './Product';
import Update from './Update';

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
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
