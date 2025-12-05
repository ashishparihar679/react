import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
 let asss= useNavigate();
  let [adata, setadata] = useState({
    name:""
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    adddata()
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    setadata({ ...adata, [name]: value });
  };
  const adddata = () => {
    axios.post('http://localhost:3001/userdata',adata)
    .then(()=>{
      alert("User Added Successfully!")
      setadata({name:""})
    })

  };
  useEffect(() => {
  }, []);
  return (
    <>
      <>
        <div>Add</div>
        <form action="" onSubmit={handlesubmit}>
          <label htmlFor="">name</label>
          <input type="text" name="name" onChange={handlechange} />
          <br />
          <br />
          {/* <label htmlFor="">age</label>
  <input type="text" name="age"/><br /><br />
  <label htmlFor="">contact</label>
  <input type="text" name="contact"/><br /><br />
  <label htmlFor="">city</label>
  <input type="text" name="city"/><br /><br /> */}
          <input type="submit" />
        </form>
      </>
    </>
  );
};

export default Add;
