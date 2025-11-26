import React from "react";

const Pra2 = () => {
  const names = ["Ashish", "Rohan", "Priya"];
  return (
    <>
      <h1>hello</h1>
      {names.map((e,index) => (
        <h1 key={index}>{e}</h1>
      ))}
    </>
  );
};

export default Pra2;
