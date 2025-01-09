import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        password,
      });
      if (res.status === 201) {
        alert("Registered Successfully!");
        navigate("/login");
      }
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-container">
        <div className="auth-box">
          <h2>Create an Account</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label>Username / Email</label>
              <input
                type="text"
                required
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button type="submit" className="btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
