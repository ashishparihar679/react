import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams(); // URL se id le rahe hain
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // ✅ Step 1: Get old data by ID
  useEffect(() => {
    axios.get(`http://localhost:3000/parihar/${id}`)
      .then((res) => setUser(res.data))
      .catch(() => alert("Data fetch karne me dikkat hai"));
  }, [id]);

  // ✅ Step 2: Input handle karne ke liye
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // ✅ Step 3: Update data
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/parihar/${id}`, user);
      alert("✅ Data updated successfully!");
      navigate("/"); // back to home page
    } catch (error) {
      alert("❌ Data update karne me problem hai");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>✏️ Edit User</h1>
      <form onSubmit={handleUpdate}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <br /><br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br /><br />

        <label>Phone:</label>
        <input
          type="number"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />
        <br /><br />

        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
