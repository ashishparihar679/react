import React from "react";
import Delete from "./Delete";
import Add from "./Add";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add/>}/>
          <Route path="/dash" element={<Delete/>}/>
        </Routes>
      </BrowserRouter> */}
      <Delete />
      <h1>---------------------------------------------</h1>
      <Add />
    </>
  );
};

export default App;
