import { useContext, useState } from 'react'
import { aryan } from './Child2'

const Child4 = () => {

  let val = useContext(aryan)

  let [toggle,settoggle]=useState(false)
  let [click,setclick]=useState(false)

  return (
    <div className={
  click ? "min-h-screen bg-black text-white p-5" : "min-h-screen bg-white text-black p-5"
    
  }>
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



    <button className={
     click ? "mt-4 px-4 py-2 bg-blue-600 text-black rounded":"mt-4 px-4 py-2 bg-blue-600 text-white rounded"
  }
    onClick={()=>{settoggle(!toggle); setclick(!click);}}> {click ? <h1>NIGHT</h1>:<h1>MORNING</h1>} </button>

 
            <h1 className="text-[50px] text-red-900">hello react</h1>

            <button class="px-8 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition duration-300">
  ok Me
</button>
        

    </div>
  )
}

export default Child4