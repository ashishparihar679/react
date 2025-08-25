import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './About';
import { Footer } from './Footer';
import { Contact } from './Contact';
export const Home = () => {
  return (
    <>
<BrowserRouter>
    <div className='text-green-600'>Home</div>
<Routes>
    <Route path='/a' element={<About/>}/>
    <Route path='/f' element={<Footer/>}/>
    <Route path='/c' element={<Contact/>}/>

</Routes>
</BrowserRouter>

    </>
  )
}
