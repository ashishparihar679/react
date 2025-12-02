import React, { useEffect, useState } from "react";

const Form = () => {
  let [frmdata, setfrmdata] = useState({});
  // let [data,setdata]= useState()

  function datasubmit(e) {
    const { name, value } = e.target;
    setfrmdata({ ...frmdata, [name]: value });
  }
  function handlsubmit(e) {
    e.preventDefault();
    console.log(frmdata);
    localStorage.setItem("userdata", JSON.stringify(frmdata));
  }

  // const get = () => {
  let a = JSON.parse(localStorage.getItem("userdata"));
  // const a=JSON.parse(localStorage.getItem("userdata"));
  console.log(a);
  // console.log(a.username)
  // setdata(a)
  // }
  // get()
  return (
    <>
      {/* <div>Form</div> */}
      <form action="" onSubmit={handlsubmit}>
        <label htmlFor="">user name</label>
        <input type="text" name="username" onChange={datasubmit} /> <br />{" "}
        <br />
        <label htmlFor="">user email</label>
        <input type="text" name="useremail" onChange={datasubmit} /> <br />{" "}
        <br />
        <label htmlFor="">user pass</label>
        <input type="text" name="userpass" onChange={datasubmit} /> <br />{" "}
        <br />
        <input type="submit" />
      </form>

      <div>
        <h1>{a?.username}</h1>
        <h1>{a?.useremail}</h1>
        <h1>{a?.userpass}</h1>
      </div>
    </>
  );
};

export default Form;
