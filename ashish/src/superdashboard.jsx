import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const Superdashboard = () => {
  let api_url = "http://localhost:3001/user";
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

const userDelete=async(id)=>{
    let cnf = window.confirm("are you sure for delete the data");
    if(! cnf) return;

    try {
       await axios.delete(`${api_url}/${id}`) 
       fetchdata();
    } catch (error) {
        console.log(error)
    }
}
// delete functiin end

// update functiin start

// update functiin end
// const [userid ,setuserid]
  return (
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
            <td><button onClick={()=>userDelete(e.id)}>delete</button><button >update</button></td>
          </tr>
        ))
        }
      </table>
    </>
  );
};
export default Superdashboard;
