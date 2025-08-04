import React from 'react'
import Child2 from './Child2'
import { useContext } from 'react'
import { myprovider } from '../../App'

const Child1 = () => {
  const aa = useContext(myprovider)
  return (
    <>
    <div>Child1</div>
    {/* <h1>mane : {aa}</h1> */}
    <Child2/>
    </>
  )
}

export default Child1