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
      console.error("Data delete nhi ho pa raha :", error);
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
      console.error("Data update nhi ho pa raha :", error);
    }
  };

  return (
    <div className="dashboard-container">
      {/* 👉 Edit Form */}
      {upashish && (
        <form className="edit-form" onSubmit={editdata}>
          <h3>Edit User</h3>

          <input
            type="text"
            value={upashish.fullName}
            onChange={(e) =>
              setupashish({ ...upashish, fullName: e.target.value })
            }
            placeholder="Full Name"
          />

          <input
            type="text"
            value={upashish.userName}
            onChange={(e) =>
              setupashish({ ...upashish, userName: e.target.value })
            }
            placeholder="User Name"
          />

          <input
            type="email"
            value={upashish.email}
            onChange={(e) =>
              setupashish({ ...upashish, email: e.target.value })
            }
            placeholder="Email"
          />

          <input
            type="text"
            value={upashish.phone}
            onChange={(e) =>
              setupashish({ ...upashish, phone: e.target.value })
            }
            placeholder="Phone"
          />

          <input
            type="text"
            value={upashish.password}
            onChange={(e) =>
              setupashish({ ...upashish, password: e.target.value })
            }
            placeholder="Password"
          />

          <div className="form-buttons">
            <button type="submit" className="update-btn">
              Update
            </button>
            <button
              type="button"
              onClick={() => setupashish(null)}
              className="cancel-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <h1 className="dashboard-title">Super Dashboard 🏆</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>FULL NAME</th>
            <th>EMAIL</th>
            <th>USER NAME</th>
            <th>PHONE NO</th>
            <th>PASSWORD</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {ashish.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.fullName}</td>
              <td>{u.email}</td>
              <td>{u.userName}</td>
              <td>{u.phone}</td>
              <td>{u.password}</td>
              <td>
                <button className="delete-btn" onClick={() => deleteUser(u.id)}>
                  Delete
                </button>
                <button className="edit-btn" onClick={() => editdatainput(u)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admitdashboard;
