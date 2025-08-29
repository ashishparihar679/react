import { useState } from 'react'
import Nav from './Components/Nav'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './Components/Footer'
import Videos from './Components/Videos'
import Gaana from './Components/Gaana'
import TvSerial from './Components/TvSerial'
import Sports from './Components/Sports'
import UserLogin from './Components/UserLogin'
import UserSignup from './Components/UserSignup'
import UserDashboard from './Components/UserDashboard'
import Enternav from './Components/Enternav'

function App() {
  const userdata=localStorage.getItem("userdata");
  console.log(userdata)
  if (userdata){
    return(
      <>
      <Router>
      
     
      {/* <Enternav/> */}
      <Routes>
        <Route element={<UserLogin/>} path='/LoginUser'></Route>
        <Route element={<UserSignup/>} path='/signup'></Route>
        <Route element={<Videos/>} path='/videos'></Route>
        <Route element={<TvSerial/>} path='/Serial'></Route>
        <Route element={<Sports/>} path='/Sports'></Route>
        <Route element={<Gaana/>} path='/Gaana'></Route>
        <Route element={<UserDashboard/>} path='/dashboard'></Route>


      </Routes>
      <Footer/>
    </Router>
      </>
    )
  }

  return (
    <>
    
    <Router>
      
      <Nav/>
    
      <Routes>
        <Route element={<UserLogin/>} path='/LoginUser'></Route>
        <Route element={<UserSignup/>} path='/signup'></Route>
        <Route element={<Videos/>} path='/videos'></Route>
        <Route element={<TvSerial/>} path='/Serial'></Route>
        <Route element={<Sports/>} path='/Sports'></Route>
        <Route element={<Gaana/>} path='/Gaana'></Route>
        <Route element={<UserDashboard/>} path='/dashboard'></Route>


      </Routes>
      <Footer/>
    </Router>
    </>


  
  )
}

export default App
