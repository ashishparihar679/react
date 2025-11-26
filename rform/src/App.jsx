import { useState } from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {

  return (
    <>
    {/* <BrowserRouter/> */}
    <Nav path="/" element={<Nav/>}/>
     <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    {/* </BrowserRouter> */}
    </>
  )
}

export default App
