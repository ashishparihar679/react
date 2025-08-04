
// import './App.css'
import { useEffect, useState, useRef, useContext, createContext } from 'react'
import Page1 from './Page1';
import Page2 from './Page2';
import Child1 from './assets/component/Child1';
import axios from 'axios';
import { data } from 'react-router-dom';

const myprovider = createContext();
function App() {
  let api_url = 'http://localhost:3002/products'
  const [name, setname]=useState([])
  const [mobile, setmobile]=useState(123456789)
  const fetchdata = async()=>{
    let res = await axios.get(api_url);
    setname(res.data)
  }
useEffect(()=>{
  fetchdata();
},[])
console.log(name)
  return (
    <>
   <h1>main component</h1>
   {/* <Page1/>
   <Page2/> */}
   

   <myprovider.Provider value={name}>
    <Child1/>
   </myprovider.Provider>
    </>

  );
}

export default App;
export {myprovider};
