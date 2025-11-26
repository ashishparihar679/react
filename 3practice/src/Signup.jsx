import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [iid, setiid] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [passs, setpasss] = useState("");
  const [emaill, setemaill] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const log = () => {
    navigate("/");
  };

  const handlechangee = async (e) => {
    e.preventDefault();

    if (!iid.trim()) {
      alert("❌ ID  FILL KARO!");
      return; // रोक दो submit
    }
    if (!fullName.trim() || !userName.trim()) {
      alert("❌ Name & Username FILL KARO!");
      return;
    }
    if (!emaill.trim()) {
      alert("❌ Email FILL KARO!");
      return;
    }
    if (!phone.trim()) {
      alert("❌ Phone number FILL KARO!");
      return;
    }
    if (!passs.trim()) {
      alert("❌ Password FILL KARO!");
      return;
    }

    try {

       const res = await axios.get("http://localhost:3001/users?id=" + iid);

      if (res.data.length > 0) {
        alert("PLEASE UNIDE THIS ID IS ALREDY REGISTER!");
        return; // रोक दो submit
      }

      await axios.post("http://localhost:3001/users", {
        id: iid,
        fullName: fullName,
        userName: userName,
        password: passs,
        email: emaill,
        phone: phone,
      });

      alert("✅ Signup Successful!");
      // सारे input reset
      setiid("");
      setFullName("");
      setUserName("");
      setpasss("");
      setemaill("");
      setPhone("");

      navigate("/dash", {
        state: {
          id: iid,
          fullName: fullName,
          userName: userName,
          password: passs,
          email: emaill,
          phone: phone,
        },
      });
    } catch (error) {
      console.log("Signup Error: ", error);
      alert("❌ Something went wrong!");
    }
  };

  return (
    <section className="sign">
      <div className="signup-container">
        <h2 className="form-title">Registration Form</h2>
        <form className="signup-form" onSubmit={handlechangee}>
          <input
            className="form-input"
            type="text"
            placeholder="Id"
            value={iid}
            onChange={(e) => setiid(e.target.value)}
          />
          <input
            className="form-input"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="form-input"
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            value={emaill}
            onChange={(e) => setemaill(e.target.value)}
          />
          <input
            className="form-input"
            type="number"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            value={passs}
            onChange={(e) => setpasss(e.target.value)}
          />
          <input className="form-btn" type="submit" value="CREATE ACCOUNT" />
        </form>

        <p className="login-text">Already have an account?</p>
        <button className="login-btn" onClick={log}>
          LOGIN
        </button>
      </div>
    </section>
  );
};

export default Signup;
