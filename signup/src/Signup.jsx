import React, { useEffect, useState } from "react";

const Signup = () => {
  let [fdata, setfdata] = useState({});
  const handledata = (e) => {
    let { name, value } = e.target;
    setfdata({ ...fdata, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("parihar", JSON.stringify(fdata));
    // console.log(fdata)
    let a = JSON.parse(localStorage.getItem("ashish"));
    let s = JSON.parse(localStorage.getItem("parihar"));
    console.log(s)
    if (a.username == s.username && a.password == s.password) {
      alert("log succesfull");
    } else {
      alert("wroung username and pass");
    }
  };

  // const aa = () => {
  //   let a = JSON.parse(localStorage.getItem("ashish"));
  //   console.log(a);
  // };
  // useEffect(()=>(
  //   aa
  // ))

  return (
    <>
      <div>Signup</div>
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

export default Signup;
