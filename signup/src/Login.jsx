import React, { useState } from "react";

const Login = () => {
   let[data , setdata]= useState({})
 const handledata = (e) => {
   const {name,value} = e.target
   setdata({...setdata,[name]:value})
  };
  const handlesubmit =(e)=>{
    e.preventDefault()
    localStorage.setItem("ashish",JSON.stringify(data))
    
  }
  return (
    <>
      <div>Login page</div>

      <form action="" onSubmit={handlesubmit}>
        <label htmlFor="">username</label>
        <input type="text" onChange={handledata} /> <br />
        <br />
        <label htmlFor="">pass</label>
        <input type="text" onChange={handledata} /> <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
