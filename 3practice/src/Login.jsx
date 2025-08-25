import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [namee, setnamee] = useState("");
  const [pass, setpass] = useState("");
  const navigate=useNavigate();

  const handlechange=async (e)=>{
      e.preventDefault();
     try {
       const res = await axios.get('http://localhost:3001/users')

      const ash = res.data.find(
        (a)=>a.name === namee && a.password === pass
      );
      if (ash) {
        console.log("Login successful ✅");
        navigate("/dash", { state: { ash: ash.password } });
      } else {
        alert("Invalid username or password ❌");
      }
     } catch (error) {
      
      console.error("Error fetching data", error);
     }

      // if(name==='ashish' && pass==='12345'){
      //     navigate('/dash')
      //   }else{
      //       console.log('incorrect information')
      //       alert('incorrect information')
      //   }
      //   console.log(name);
      //   console.log(pass);
    }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handlechange}>
        <input type="text" placeholder="username"
         value={namee}
         onChange={(e)=>setnamee(e.target.value)}
         />
           <input type="text" placeholder="password"
         value={pass}
         onChange={(e)=>setpass(e.target.value)}
         />
        <input type="submit" value="ok" />
      </form>
      
    </>
  );
};

export default Login;
