import React from "react";

import { useState } from "react"
// import React {useState} from 'react-router-dom'

const Practice = () => {
     const [count, setCount] = useState(0); 
  return (
    <>
    <div>Practice</div>
     <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Remove</button>
    </div>
    </>
  )
}

export default Practice