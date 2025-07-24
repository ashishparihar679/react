import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Page1 from './Component/Page1';
import Page1 from './Page1';
import Dashboard from './Dashboard';
import Nav from './Nav';
import Superdashboard from './superdashboard';
import Product from './Product';

function App() {
  return (
    
    <Router>
      <Dashboard/>
      <Nav />
      <Page1 />
      <Superdashboard/>
      <Product/>
      
      <Routes>
        <Route path="/p" element={<Page1 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </Router>
  );
}

export default App;
