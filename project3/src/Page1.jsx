import React from 'react'
import { useEffect, useState, useRef } from 'react'

const Page1 = () => {
    const [intialstate, finalstate] = useState(0);
      const val = useRef(0); 
      const clr = useRef(null); 
    
      const increment = () => {
        finalstate(intialstate + 1);
        val.current += 1;
        console.log( val.current); 
      }
      const changeclr =()=>{
        clr.current.style.backgroundColor="red"
      }
    const hideclr =()=>{
        clr.current.style.backgroundColor=null
      }
      useEffect(() => {
        console.log("me chal raha hu");
      }); 
    
    
  return (
    <>
    
    <div>Page1</div>
     <div>

      <h1>project 3</h1>
      <h1>{intialstate}</h1>
      <button onClick={increment}>Click</button>
      <h1>val ; {val.current}</h1>
      <button ref={clr}>change hoga color</button>
      <br />
      <button onClick={changeclr}>color karo</button>
      <button onClick={hideclr}>color ko hata do</button>
      <br />
      <br />
      <br />
      <br />
    </div>
    </>
  )
}

export default Page1