import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';

const Footer = () => {
    const notify = () => toast("Wow so easy!");
  return (
    <>
    
         <button onClick={notify}>Notify!</button>
        <ToastContainer />
    </>
  )
}

export default Footer