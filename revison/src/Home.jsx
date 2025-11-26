import React, { useState } from "react";

const Home = () => {
  let [person, Setperson] = useState([
    {
      name: "sunil",
      age: 90,
      city: "bhopal",
    },
    {
      name: "sunil",
      age: 90,
      city: "bhopal",
    },
    {
      name: "sunil",
      age: 90,
      city: "bhopal",
    },
  ]);
  return (
    <>
      <h1>==========================</h1>
      {person.map((e, j) => (
        <div key={j}>
          <h1>{j}  {e.name} </h1>
          <h1>  {e.age} </h1>
          <h1>  {e.city} </h1>
        </div>
      ))}
    </>
  );
};

export default Home;
