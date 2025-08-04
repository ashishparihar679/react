import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
   
   <>
   <nav id="head">
    <h1>LOGO</h1>
    <ul id="head1">
     <li><Link className='p1' to="/">Singup</Link> </li>
      <li><Link className='p1' to="/Dashboard">Dashboard</Link> </li>
      <li><Link className='p1' to="/Update">update</Link></li> 
      <li><Link className='p1' to="/Product">Product</Link> </li>
      <li><Link className='p1' to="/Superdashboard">Superdashboard</Link>   </li> 
   </ul>
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