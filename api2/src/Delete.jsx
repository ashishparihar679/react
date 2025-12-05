import axios from "axios";
import React, { useEffect, useState } from "react";

const Delete = () => {
  let [apidata, setapidata] = useState([]);
  let [showfrm, setshowfrm] = useState(false);
  let [editfrm, seteditfrm] = useState({});

  const print = () => {
    axios
      .get("http://localhost:3001/userdata")
      .then((res) => setapidata(res.data));
  };
  function handledelte(id) {
    // alert(id)
    axios.delete(`http://localhost:3001/userdata/${id}`).then(() => {
      alert("deleted");
      print();
    });
    // window.location.reload();
  }
  const handleedit = (id) => {
    let { name, value } = id.target;
    seteditfrm({...editfrm,[name]:value})
  };
const finalsubmit =(e)=>{
e.preventDefault()
axios.put(`http://localhost:3001/userdata/${editfrm.id}`,editfrm)
.then(a=>(alert("updated"),print()))
setshowfrm(false)

}
  useEffect(() => {
    print();
  }, []);
  return (
    <>
      <div>delete page</div>
      <table border="2px">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>contact</th>
            <th>city</th>
            <th>action</th>
          </tr>
        </thead>

        <tbody>
          {apidata.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.contact}</td>
              <td>{e.city}</td>
              <td>
                <button onClick={() => handledelte(e.id)}>delete</button>
                <button onClick={() => (setshowfrm(true), seteditfrm(e))}>
                  edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showfrm && (
        <form action="" onSubmit={finalsubmit}>
          <label htmlFor="">id</label>
          <input
            type="text"
            value={editfrm.id}
            name="id"
            onChange={handleedit}
          />{" "}
          <br />
          <br />
          <label htmlFor="">name</label>
          <input
            type="text"
            value={editfrm.name}
            name="name"
            onChange={handleedit}
          />{" "}
          <br />
          <br />
          <label htmlFor="">age</label>
          <input
            type="text"
            value={editfrm.age}
            name="age"
            onChange={handleedit}
          />{" "}
          <br />
          <br />
          <label htmlFor="">contact</label>
          <input
            type="text"
            value={editfrm.contact}
            name="contact"
            onChange={handleedit}
          />{" "}
          <br />
          <br />
          <label htmlFor="">city</label>
          <input
            type="text"
            value={editfrm.city}
            name="city"
            onChange={handleedit}
          />{" "}
          <br />
          <br />
          <input type="submit" />
        </form>
      )}

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
