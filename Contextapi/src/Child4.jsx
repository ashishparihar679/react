import { useContext, useState } from 'react'
import { aryan } from './Child2'

const Child4 = () => {

  let val = useContext(aryan)

  let [toggle,settoggle]=useState(false)
  let [click,setclick]=useState(false)

  return (
    <>
    <div>Child4</div>

    {/* <aryan.Consumer>
        {
            (e)=>(
                <h1>{e}</h1>
            )
        }
    </aryan.Consumer> */}

    <h1>{val.name}</h1>
    <h1>{val.age}</h1>

{toggle ? <h1>good morning</h1>:<h1>good night</h1>}

<div onClick={()=>setclick(!click)}>

    <button onClick={()=>settoggle(!toggle)}> {click ? <h1>NIGHT</h1>:<h1>MORNING</h1>} </button>
</div>
    </>
  )
}

export default Child4