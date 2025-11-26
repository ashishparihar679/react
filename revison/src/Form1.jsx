import React, { useState } from "react";

const Form1 = () => {
  let [a, seta] = useState();
  let [b, setb] = useState();
  let [c, setc] = useState();
  let [d, setd] = useState();
  let [e, sete] = useState();

  //   function handleinput(e) {
  //     console.log(e.target.value);
  //     seta(e.target.value);
  //   }
  //   function handleinput2(e) {
  //     console.log(e.target.value);
  //     setb(e.target.value);
  //   }
  //   function handleinput3 (e){
  //      console.log(e.target.value)
  //      setc(e.target.value)
  //     }
  //     function handleinput4 (e){
  //      console.log(e.target.value)
  //      setd(e.target.value)
  //     }
  //     function handleinput5 (e){
  //      console.log(e.target.value)
  //      sete(e.target.value)
  //     }

  function handlesubmit(e) {
    alert(a)
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
      {/* <label htmlFor="">number</label>
      <input type="number" onChange={handleinput3} />
      <br />
      <label htmlFor="">city</label>
      <input type="text" onChange={handleinput4} />
      <br />
      <label htmlFor="">password</label>
      <input type="text" onChange={handleinput5} /> */}
      <br />
      <h1>{a}</h1>
      {/* <h1>{b}</h1>
      <h1>{c}</h1>
      <h1>{d}</h1>
      <h1>{e}</h1> */}
    </>
  );
};

export default Form1;
