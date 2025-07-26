import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
   
   <>
   <nav id="head">
     <Link className='p1' to="/">Page1</Link> 
      <Link className='p1' to="/Dashboard">Dashboard</Link> 
      <Link className='p1' to="/Update">update</Link> 
      <Link className='p1' to="/Product">Product</Link> 
      <Link className='p1' to="/Superdashboard">Superdashboard</Link>    
   </nav>
   {/* <li>
    <ul>Page1</ul>
    <ul>Dashboard</ul>
    <ul>app</ul>
    <ul>main</ul>
   </li> */}
   </>
  );
};

export default Nav;