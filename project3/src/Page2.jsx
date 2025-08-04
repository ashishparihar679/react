import React from 'react'
import { useEffect, useState, useRef } from 'react'
import './style.css'

const Page2 = () => {
    
  const [Time,setTime] = useState(0);
  let timeRef = useRef(0);

  const start=()=>{
    // setTime(Time+1)
timeRef.current =setInterval(()=>{
setTime(Time=>Time+1)
},1000)
}

console.log("a", timeRef)

const stop=()=>{
    clearInterval(timeRef.current)
}
const rest=()=>{
    setTime(0);

}

//   useEffect(() => {
//           console.log("me chal raha hu");
//         }); 
  return (
    <>
    <div className="page-container">
  <div className="page-title">Page2</div>
  <div className="timer-section">
    <h1 className="time">{Time}</h1>
    <button onClick={start} className="btn">Start</button>
    <button onClick={stop} className="btn">Pause</button>
    <button onClick={rest} className="btn">Reset</button>
  </div>
</div>

    </>
  )
}

export default Page2