import { BrowserRouter, Routes , Route } from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Footer from "./Footer"

function App() {

  return (
    <>
    {/* <Home/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/ashish" element={<Footer/>} />
      {/* <h1>hello</h1> */}
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
