import React, { useEffect, useState } from "react";
import axios from "axios";

const Admitdashboard = () => {
  const [ashish, setashish] = useState([]);
  const [upashish, setupashish] = useState(null);

  // Get all users
  const userdata = async () => {
    try {
      const res = await axios.get("http://localhost:3001/users");
      setashish(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    userdata();
  }, []);

  // Delete user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      userdata(); // delete ke baad refresh
    } catch (error) {
      console.error("data delete nhi ho pa raha :", error);
    }
  };

  // Fill edit form
  const editdatainput = (val) => {
    setupashish(val);
  };

  // Update user
  const editdata = async (ee) => {
    ee.preventDefault();
    try {
      await axios.put(`http://localhost:3001/users/${upashish.id}`, upashish);

      setupashish(null); // form clear
      userdata(); // data reload
    } catch (error) {
      console.error("data update nhi ho pa raha :", error);
    }
  };

  return (
    <>
      {/* 👉 Edit Form (sirf jab edit ho raha ho tab dikhega) */}
      {upashish && (
        <form onSubmit={editdata}>
          <h3>Edit User</h3>
          <input
            type="text"
            value={upashish.name}
            onChange={(e) =>
              setupashish({ ...upashish, name: e.target.value })
            }
          />
          <input
            type="email"
            value={upashish.email}
            onChange={(e) =>
              setupashish({ ...upashish, email: e.target.value })
            }
          />
          <input
            type="text"
            value={upashish.password}
            onChange={(e) =>
              setupashish({ ...upashish, password: e.target.value })
            }
          />
          <button type="submit">Update</button>
          <button type="button" onClick={() => setupashish(null)}>
            Cancel
          </button>
        </form>
      )}

      <h1>Super Dashboard 🏆</h1>
      <table border="2px">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {ashish.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.password}</td>
              <td>
                <button onClick={() => deleteUser(u.id)}>Delete</button>
                <button onClick={() => editdatainput(u)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Admitdashboard;
