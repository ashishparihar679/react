import React from 'react'
import { useLocation } from 'react-router-dom'
const Dash = () => {
  const aman = useLocation();

  
   const { name="x ", email="x ", mobile="x ", password="x " } = aman.state || {};
 
 

  return (
    <>
    <h1>dashboard :-</h1>
    <h1>NAME :-  {name} </h1>
    <h1>EMAIL :-  {email} </h1>
    <h1>MOBILE :-  {mobile} </h1>
    <h1>PASSWORD :-  {password} </h1>
    
    </>
  )
}

export default Dash