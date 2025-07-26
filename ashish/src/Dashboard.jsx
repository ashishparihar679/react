import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const formdata = location.state;

  if (!formdata) {
    return <h1>No data found</h1>;
  }

  return (
    <>
      <h1>Your Dashboard</h1>
      <h2>Name: {formdata.name}</h2>
      <h2>Email: {formdata.email}</h2>
      <h2>Mobile: {formdata.mobile}</h2>
      <h2>Password: {formdata.password}</h2>
    </>
  );
};

export default Dashboard;
