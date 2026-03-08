import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await api.registerUser({
        username,
        email,
        password
      });

      alert("Registration successful!");
      navigate("/login");

    } catch (err) {

      alert(
        err.response?.data?.message || "Registration failed"
      );

    }
  };

  return (
    <div style={page}>

      <div style={card}>

        <h2 style={title}>🚀 Join Codezenia</h2>

        <form onSubmit={handleSubmit} style={form}>

          <input
            style={input}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            style={input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            style={input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button style={btn} type="submit">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;


/* ---------- STYLES ---------- */

const page = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg,#020617,#0f172a)",
  fontFamily: "Segoe UI"
};

const card = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(12px)",
  padding: "40px",
  borderRadius: "15px",
  width: "320px",
  textAlign: "center",
  color: "white"
};

const title = {
  marginBottom: "20px"
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};

const input = {
  padding: "10px",
  borderRadius: "8px",
  border: "none"
};

const btn = {
  padding: "10px",
  border: "none",
  borderRadius: "8px",
  background: "linear-gradient(90deg,#7c3aed,#00e5ff)",
  color: "white",
  cursor: "pointer"
};