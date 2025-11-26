// import React from 'react'
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./mycss/delete.css";
const Delete = () => {
  const [e, sete] = useState([]);
  const [count, setCount] = useState(0);
  const ashi = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    fetchData();
    ashi();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/parihar");
      console.log(res.data);
      sete(res.data);
    } catch (error) {
      console.log("Data fetch karne me problem hai 😢");
    }
  };
  

  const Deletedata = async (id) => {
    // Step 1: Confirmation popup
    const confirmDelete = window.confirm(
      "⚠️ Are you sure you want to delete this user?"
    );

    // Step 2: Agar user Cancel kare, to kuch mat karo
    if (!confirmDelete) {
      alert("❌ Delete cancelled.");
      return;
    } else {
      try {
        await axios.delete(`http://localhost:3000/parihar/${id}`);
        alert("✅ Data deleted successfully!");
        fetchData();
      } catch (error) {
        console.log("Data delete karne me problem hai 😢");
      }
    }
  };

  return (
    <>
    <h1>{count}</h1>
      <div className="home-container">
        <h1 className="title">📋 User Details</h1>

        <div className="card-container">
          {e.map((user) => (
            <div className="user-card" key={user.id}>
              <h2 className="user-name">{user.name}</h2>
              <p>
                <b>Email:</b> {user.email}
              </p>
              <p>
                <b>Phone:</b> {user.phone}
              </p>

              {/* Delete button */}
              <button
                onClick={() => Deletedata(user.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Delete;
