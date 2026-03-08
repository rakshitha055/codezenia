import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();

try {
  const res = await api.loginUser({ email, password });

  localStorage.setItem("user", JSON.stringify(res.data));

  navigate("/dashboard");
} catch (err) {
  alert("Invalid credentials");
}


};

return ( <div style={page}> <div style={card}> <h2 style={title}>🔐 Login to Codezenia</h2>


    <form onSubmit={handleSubmit} style={form}>
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
        Login
      </button>
    </form>
  </div>
</div>

);
}

export default Login;

/* STYLES */

const page = {
height: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
background: "linear-gradient(135deg,#020617,#0f172a)",
fontFamily: "Segoe UI",
};

const card = {
background: "rgba(255,255,255,0.05)",
backdropFilter: "blur(12px)",
padding: "40px",
borderRadius: "15px",
width: "320px",
textAlign: "center",
color: "white",
};

const title = {
marginBottom: "20px",
};

const form = {
display: "flex",
flexDirection: "column",
gap: "15px",
};

const input = {
padding: "10px",
borderRadius: "8px",
border: "none",
};

const btn = {
padding: "10px",
border: "none",
borderRadius: "8px",
background: "linear-gradient(90deg,#7c3aed,#00e5ff)",
color: "white",
cursor: "pointer",
};
