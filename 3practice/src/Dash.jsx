import React from 'react'
import { useLocation } from 'react-router-dom'
const Dash = () => {
  const aman = useLocation();
  return (
    <>
    <h1>dashboard :- {aman.state.ash}</h1>
    
    </>
  )
}

export default Dash