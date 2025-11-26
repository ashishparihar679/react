import React from 'react'
import { Link } from 'react-router-dom'
import "./mycss/nav.css"

const Nav = () => {
  return (
    <>
    <div className="navbar">
    <h1 className="logo">logo</h1>

    <ul className="nav-links">
        <li><Link to="/">home</Link></li>
        <li><Link to="/create">create</Link></li>
        <li><Link to="/delete">delete</Link></li>
        <li><Link to="/read">read</Link></li>
        <li><Link to="/update">update</Link></li>
    </ul>
</div>

    </>
  )
}

export default Nav