import axios from "axios";
import React, { useEffect, useState } from "react";

const Delete = () => {
  let [apidata, setapidata] = useState([]);

  const print=()=> {
    axios
      .get("http://localhost:3001/userdata")
      .then((res) => setapidata(res.data));
  }
  function handledelte(id) {
    // alert(id)
    axios.delete(`http://localhost:3001/userdata/${id}`)
    .then(() => {
      alert("deleted");
      print();
    });
    // window.location.reload();
  }
  

  useEffect(() => {
    print();
  }, []);
  return (
    <>
      

      <div>delete page</div>
      <table border="2px">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>contact</th>
          <th>city</th>
        </tr>
        {apidata.map((e) => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.contact}</td>
            <td>{e.city}</td>
            <td>
              <button onClick={() => handledelte(e.id)}>delete</button>
            </td>
          </tr>
        ))}
      </table>

      {/* {apidata.map((e) => (
        <div key={e.name}>
          <h1>{e.name}</h1>
          <h1>{e.age}</h1>
          <h1>{e.contact}</h1>
          <h1>{e.city}</h1>
        </div>
      ))} */}
    </>
  );
};

export default Delete;
