import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./mycss/create.css";

const Create = () => {
  // const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
    const fetchData = async (e) => {
      e.preventDefault();
      const send = {
        name: name,
        email: email,
        phone: phone,
      };
      try {
        const res = await axios.post("http://localhost:3000/parihar", send);
        console.log("✅ Data added:", res.data);
        alert("User added successfully!");

        // form clear kar do
        setName("");
        setEmail("");
        setPhone("");
      } catch (error) {
        console.log("Data fetch karne me problem hai 😢");
      }
    };
    

  return (
    <>
      <h1>ADD DATA</h1>
      <form onSubmit={fetchData}>
        <label htmlFor="">name</label>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">phone</label>
        <input
          type="number"
          placeholder="Enter phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input type="submit" value="POST" />
      </form>
    </>
  );
};

export default Create;
