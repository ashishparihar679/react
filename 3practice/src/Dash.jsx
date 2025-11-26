import React from "react";
import { useLocation } from "react-router-dom";

const Dash = () => {
  const aman = useLocation();

  const {
    id = "N/A",
    fullName = "N/A",
    userName = "N/A",
    email = "N/A",
    phone = "N/A",
    password = "N/A",
  } = aman.state || {};

  return (
    <div className="dashboard">
      <h1>📊 Dashboard</h1>
      <h2>ID :- {id}</h2>
      <h2>Full Name :- {fullName}</h2>
      <h2>User Name :- {userName}</h2>
      <h2>Email :- {email}</h2>
      <h2>Phone :- {phone}</h2>
      <h2>Password :- {password}</h2>
    </div>
  );
};

export default Dash;
