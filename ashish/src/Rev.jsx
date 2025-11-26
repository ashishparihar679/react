import React, { useEffect, useState } from 'react'

const Rev = () => {

    let [count,setCount]=useState(0)
    let [color,setcolor]=useState()

    useEffect(()=>{
        console.log("working")
    },[color])
  return (
   <div style={{backgroundColor:color}}>


<h1>{count}</h1>

<button onClick={()=>setCount(count+1)}>+</button>
<button onClick={()=>setcolor("red")}>red</button>
   </div>
  )
}

export default Rev