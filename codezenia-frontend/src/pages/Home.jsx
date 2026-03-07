import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Codezenia</h1>
      <p>New here? <Link to="/register">Register</Link></p>
      <p>Already a user? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Home;