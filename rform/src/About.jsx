// import React from "react";
import React, { useState } from "react";

const About = () => {
  let [a, seta] = useState();
  let [b, setb] = useState();
  let [c, setc] = useState();
  let [d, setd] = useState();
  let [e, sete] = useState();

  function handlesubmit(e) {
    alert(a);
    e.preventDefault();
    console.log(a + "\n " + b);
  }
  return (
    <>
      <form action="" onSubmit={handlesubmit}>
        <label htmlFor="">name</label>
        <input type="text" onChange={(e) => seta(e.target.value)} />

        <br />
        <label htmlFor="">email</label>
        <input type="text" onChange={(e) => setb(e.target.value)} />
        <input type="submit" />
      </form>
      <br />
      <br />
      <h1>{a}</h1>
    </>
  );
};

export default About;
