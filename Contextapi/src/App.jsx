import { createContext, useState } from 'react'
import './App.css'
import Child2 from './Child2'

let data=createContext()
let name = "globle data"

function App() {

  return (
    <>
<h1>app</h1>
    <data.Provider value={name}>
    <Child2/>
    </data.Provider>

    </>
  )
}

export default App
export {data}
