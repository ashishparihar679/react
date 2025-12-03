import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <>
      <BrowserRouter>
      <h1>header</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      <h1>footer</h1>
      </BrowserRouter>
    </>
  );
}

export default App;
