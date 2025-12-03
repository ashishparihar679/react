import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [data, setdata] = useState({});

  const as = useNavigate();
  const handledata = (e) => {
    const { name, value } = e.target;
    //  setdata({...setdata,[name]:value})
    setdata({ ...data, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("ashish", JSON.stringify(data));
    // console.log(data)
    as("/signup");
  };
  // let a= JSON.parse(localStorage.getItem("ashish"))
  return (
    <>
      <div>Login page</div>

      <form action="" onSubmit={handlesubmit}>
        <label htmlFor="">username</label>
        <input type="text" name="username" onChange={handledata} /> <br />
        <br />
        <label htmlFor="">pass</label>
        <input type="text" name="password" onChange={handledata} /> <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
