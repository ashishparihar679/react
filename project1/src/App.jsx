import Mera from "./Mera"
import "./index.css"

function App() {
  let a =12;
  let b =13;
  let z =a+b;
  console.log(z);

  let arr=[
    {
      name:"ashish",
      roll:"53"
    },
     {
      name:"parihar",
      roll:"55"
    }
  ]

  arr.map((e)=>{
    console.log(e);
  })
  
  return (
    <>
    
   <Mera/>
    
    <h1>this is react project</h1>
   <h1> {z}</h1>
   <h1> {z}</h1>
    {
      arr.map((e)=>(

    <>
    <h1>{e.name}</h1>
    <h1>{e.roll}</h1>
    </>
      ))
    }
    </>
  )
}

export default App
