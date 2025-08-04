import React, { useContext } from 'react'
import { myprovider } from '../../App';
const Child3 = () => {
    const mobile = useContext(myprovider);
    // const [mobile, setmobile]= useContext(myprovider)
  return (
    <>
    <div>Child3</div>

    {
      
        mobile.map((e,i)=>
<div key={e}>
<h3>number : {e.id}</h3>
<h3>Title : {e.title}</h3>
<h3> price : {e.price}</h3>
<img src={e.image} height="200px" width="200px" alt="image not found" />

</div>
        )
     
    }
       </>
  )
}

export default Child3