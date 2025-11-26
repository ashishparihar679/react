import React, { useEffect, useState } from "react";
import axios from "axios";

const SuperDashboard = () => {
  const [ashish, setashish] = useState([]);

  useEffect(() => {
    const userdata = async () => {
      try {
        const res = await axios.get("http://localhost:3001/users");
        setashish(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    userdata();
  }, []);

  return (

    <section className="s1">

    <div className="dashboard-container">
      <h1 className="dashboard-title">Super Dashboard 🏆</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>FULL NAME</th>
            <th>EMAIL</th>
            <th>NUMBER</th>
          </tr>
        </thead>
        <tbody>
          {ashish.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.fullName}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </section>
  );
};

export default SuperDashboard;
