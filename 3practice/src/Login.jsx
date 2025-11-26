import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [namee, setnamee] = useState("");
  const [pass, setpass] = useState("");
  const navigate = useNavigate();

  const reg = () => {
    navigate("/signup");
  };

  const handlechange = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:3001/users");

      const ash = res.data.find(
        (a) => a.name === namee && a.password === pass
      );
      if (ash) {
        console.log("Login successful ✅");
        navigate("/dash", {
          state: {
            name: ash.name,
            password: ash.password,
            email: ash.email,
            mobile: ash.mobile,
          },
        });
      } else {
        alert("Invalid username or password ❌");
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
   <div className="login">
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handlechange} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={namee}
          onChange={(e) => setnamee(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
          className="login-input"
        />
        <input type="submit" value="Login" className="login-btn" />
      </form>

      <h2 className="register-title">New User? Register here 👇</h2>
      <button onClick={reg} className="register-btn">
        Go to Signup
      </button>
    </div>
  </div>
  );
};

export default Login;
