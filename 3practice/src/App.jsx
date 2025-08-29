import "./App.css";
import Dash from "./Dash";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import SuperDashboard from "./Superdashboard";
import Admitdashboard from "./Admitdashboard";
import Nav from "./Nav";
import Practice from "./Practice";


function App() {
  // alert("this is app page")

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/super" element={<SuperDashboard />} />
          <Route path="/admit" element={<Admitdashboard />} />
          <Route path="/nav" element={<Nav/>} />
          <Route path="/practice" element={<Practice/>} />
        </Routes>
      </BrowserRouter>

      {/* <h1>hello</h1> */}
    </>
  );
}

export default App;
