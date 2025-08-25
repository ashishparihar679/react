import "./App.css";
import Dash from "./Dash";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // alert("this is app page")

  return (
    <>
      <BrowserRouter>
        {/* <Login /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dash" element={<Dash />} />
        </Routes>
      </BrowserRouter>

      {/* <h1>hello</h1> */}
    </>
  );
}

export default App;
