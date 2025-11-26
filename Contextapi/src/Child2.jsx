import React, { createContext } from "react";
import { data } from "./App";
import Child3 from "./Child3";
import Child4 from "./Child4";

let aryan = createContext()
let detail = {name:"child 2 se data aya hai",age:20}
const Child2 = () => {
  return (
    <>
      <div>Child2</div>
      <data.Consumer>{
      (r) => (<h1>{r}</h1>)
      }</data.Consumer>

      <aryan.Provider value={detail}>
        <Child4/>
      </aryan.Provider>
    </>
  );
};

export default Child2;
export {aryan}
