import React, { useState } from 'react'

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {

    const [nam,setnam] = useState();
    const [passs,setpasss] = useState();
    const [emaill,setemaill] = useState();

     const navigate=useNavigate();

     const log =()=>{
        navigate('/');
     }
  const handlechangee=async (e)=>{

      e.preventDefault();
      try {
      await axios.post("http://localhost:3001/users", {
      name: nam,
      password: passs,
      email: emaill,
    });
    alert("Signup Successful ✅");
    setnam(""); // form reset
    setpasss("");
    setemaill("");

    navigate('/dash',
       { state: { 
          name: nam,
    password: passs,
    email: emaill,
        }}
    );
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <>
    <h1>Register</h1>
      <form onSubmit={handlechangee} >
        <input type="text" placeholder="username"
         value={nam}
         onChange={(e)=>setnam(e.target.value)}
         />
           <input type="text" placeholder="password"
         value={passs}
         onChange={(e)=>setpasss(e.target.value)}
         />
         <input type="text" placeholder="email"
         value={emaill}
         onChange={(e)=>setemaill(e.target.value)}
         />
         <br />
        <input type="submit" value="Signup" />
      </form>
      <h1>for login click here</h1>
      <button onClick={log}>login </button>
    </>
  )
}

export default Signup