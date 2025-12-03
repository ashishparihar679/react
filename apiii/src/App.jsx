import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  let [apidata, setapidata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/userdata")
      .then((res) => setapidata(res.data));
  }, []);
  return (
    <>
      <div>App</div>
      {/* <table border="2px">
        <tr>
          <th>id</th>
          <th>title</th>
        </tr>
        {apidata.map((e) => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.title}</td>
          </tr>
        ))}
      </table> */}
      {apidata.map((e) => (
        <div key={e.name}>
          <h1>{e.name}</h1>
          <h1>{e.age}</h1>
          <h1>{e.contact}</h1>
          <h1>{e.city}</h1>
        </div>
      ))}
    </>
  );
};

export default App;
