import React, { useEffect, useState } from "react";

function Pra() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered or updated!");
  });

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Pra;
