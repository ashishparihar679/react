import React, { useState, useEffect } from "react";

function Practice() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // 1. Har render pe chalega
  useEffect(() => {
    console.log("Runs on every render");
  });

  // 2. Sirf ek bar chalega (mount)
  useEffect(() => {
    console.log("Runs only once");
  }, []);

  // 3. Sirf jab count change hoga
  useEffect(() => {
    console.log("Runs only when count changes");
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <br />

      <input
        type="text"
        placeholder="Type name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
  <h1>hello</h1>
}

export default Practice;
