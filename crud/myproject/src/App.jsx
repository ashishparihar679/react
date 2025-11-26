import { useState } from 'react'
// import './App.css'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Read from './Read'
import Create from './Create'
import Update from './Update'
import Delete from './Delete'
import Nav from './Nav'
import Footer from './Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      {/* <h1>hello</h1> */}
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/read' element={<Read/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/update' element={<Update/>}></Route>
        <Route path='/delete' element={<Delete/>}></Route>
        <Route path="/update/:id" element={<Update />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
