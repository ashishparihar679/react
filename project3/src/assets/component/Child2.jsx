import React from 'react'
import Child3 from './Child3'
import { useContext } from 'react'
import { myprovider } from '../../App'
const Child2 = () => {
  const aa = useContext(myprovider)
  return (
    <>
    <div>Child2</div>
    {/* <h1>manbile number : {aa}</h1> */}
     <Child3/>
    </>
  )
}

export default Child2