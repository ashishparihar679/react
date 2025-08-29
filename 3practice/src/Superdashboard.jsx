import React, { useEffect, useState } from "react";
import axios from "axios";

const SuperDashboard = () => {
  const [ashish, setashish] = useState([]);

  useEffect(()=>{
const userdata = async ()=>{
    try {
        const res = await axios.get('http://localhost:3001/users');
        setashish(res.data);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};
userdata();

  },[]);

  return (
    <>
      <h1>Super Dashboard 🏆</h1>
      <table border="2px">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
          </tr>
        </thead>
        <tbody>
          
          {ashish.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.password}</td>
            </tr>
          ))} 
         
        </tbody>
      </table>
    </>
  );
};

export default SuperDashboard;
