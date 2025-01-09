import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // POST request to our server
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });
      if (res.data.token) {
        // Save token and role in localStorage
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        // Redirect based on role
        if (res.data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-container">
        <div className="auth-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
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
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
