import React, { useState,useEffect } from 'react';
import './style.css';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
  const navigate = useNavigate();

  
  const API_URL = 'http://localhost:3000/users';
  const [userdata,updateuserdata]=useState([]);

  // const validatemail=async

  const [formdata, updateform] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formdata);
      navigate('/dashboard', { state: formdata });
    } catch (error) {
      alert('Server is closed or API failed');
      console.error(error);
    }
  };

  return (
    <>
    <div className='pA'>

      <h1>This is a form using useState and useEffect</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="enter Name"
          value={formdata.name}
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="email"
          placeholder="enter Email"
          value={formdata.email}
          onChange={handleChange}
          />
        <br />

        <input
          type="text"
          name="mobile"
          placeholder="enter Mobile"
          value={formdata.mobile}
          onChange={handleChange}
          />
        <br />

        <input
          type="password"
          name="password"
          placeholder="enter Password"
          value={formdata.password}
          onChange={handleChange}
          />
        <br />

        <button type="submit">Submit</button>

      </form>
      {/* <h1>Your name is: {formdata.name}</h1>
      <h1>Your email is: {formdata.email}</h1>
      <h1>Mobile No.: {formdata.mobile}</h1>
      <h1>Your Password: {formdata.password}</h1> */}
    </div>
    </>
  );
};

export default Page1;

