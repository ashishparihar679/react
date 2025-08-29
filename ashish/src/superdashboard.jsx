import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Superdashboard = () => {
  let api_url = "http://localhost:3000/users";
  let [initialdata, updatedata] = useState([]);
  const fetchdata = async () => {
    try {
      let response = await axios.get(api_url);
      updatedata(response.data);
    } catch (error) {
      alert("data not found");
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  //   console.log(initialdata);
  // delete functiin start

  const userDelete = async (id) => {
    let cnf = window.confirm("are you sure for delete the data");
    if (!cnf) return;

    try {
      await axios.delete(`${api_url}/${id}`);
      fetchdata();
    } catch (error) {
      console.log(error);
    }
  };
  // delete functiin end

  // update functiin start

  // update functiin end

  const [formdata, updateform] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [userid, setuserid] = useState(null);
  const updateuser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${api_url}/${userid}`, formdata);
      setuserid(null);
      // Navigate('/superdashboard');
      fetchdata();
    } catch (error) {
      console.log(error);
    }
  };
  const userUpadte = (id) => {
    setuserid(id);
    const user = initialdata.find((u) => u.id == id);
    updateform({
      name: user.name || "",
      email: user.email || "",
      mobile: user.mobile || "",
      password: user.password || "",
    });
  };

  return (
    <>
      {userid ? (
        <>
          <div className="pA">
            <h1>update user</h1>

            <form onSubmit={updateuser}>
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

            <h1>Your name is: {formdata.name}</h1>
            <h1>Your email is: {formdata.email}</h1>
            <h1>Mobile No.: {formdata.mobile}</h1>
            <h1>Your Password: {formdata.password}</h1>
          </div>
        </>
      ) : (
        <>
          <div>Superdashboard</div>
          <table className="ashishtable">
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>email</th>
              <th>mobile</th>
              <th>password</th>
              <th>action</th>
            </tr>
            {initialdata.map((e) => (
              <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>{e.password}</td>
                <td>
                  <button onClick={() => userDelete(e.id)}>delete</button>
                  <button onClick={() => userUpadte(e.id)}>update</button>
                </td>
              </tr>
            ))}
          </table>
        </>
      )}
    </>
  );
};
export default Superdashboard;
