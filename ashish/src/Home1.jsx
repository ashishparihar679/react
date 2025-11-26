import React, { useState } from "react";

const Home1 = () => {
  let [person, setperson] = useState([
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
      <div>Home1</div>
      {person.map((e) => (
       <div>
         <h1>{e.name}</h1>
        <h1>{e.age}</h1>
       </div>
      ))}
    </>
  );
};

export default Home1;
