import { useEffect, useState } from "react";

function App() {
  let [c, Setc] = useState(1);
  let [color, Setcolor] = useState(1);
  useEffect(() => {
    console.log("ashish");
  }, [c]);
  const aa = () => {
    Setc(c + 1);
  };
  const cc = ()=>{
    Setcolor("yellow")
  }

  return (
    <div style={{ backgroundColor: color }}>
      <h1>hello {c}</h1>
      <button onClick={aa}>inc+</button>
      <button onClick={cc}>yellow color</button>
    </div>
  );
}

export default App;
