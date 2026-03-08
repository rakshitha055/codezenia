// src/pages/Dashboard.jsx
import { useState } from "react";
import XPBar from "../components/XPBar";
import { Link } from "react-router-dom"; // Add Link for navigation
import "./Dashboard.css";

function Dashboard() {
  const [user] = useState(
    JSON.parse(localStorage.getItem("user")) || {
      username: "Rakshitha",
      xp: 0,
      level: 1,
      streak: 0,
    }
  );

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile-card">
          <div className="username">{user.username}</div>
          <div className="level">Level {user.level}</div>
          <div className="xp-streak">
            <span>XP: {user.xp}</span>
            <span>🔥 Streak: {user.streak}</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <Link to="/leaderboard"><button>Leaderboard</button></Link>
          <Link to="/roadmap"><button>Roadmap</button></Link>
          <Link to="/achievements"><button>Achievements</button></Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Progress */}
        <section className="progress-section">
          <h2>Your Progress</h2>
          <XPBar xp={user.xp} level={user.level} />
        </section>

        {/* Games */}
        <section className="games-section">
          <h2>Games</h2>
          <div className="games-grid">
            {/* Story Quest */}
            <Link to="/games/storyquest">
              <div className="game-card" style={{ backgroundColor: "#38a169" }}>
                Story Quest 🌍
              </div>
            </Link>

            {/* Debugging Arena */}
            <Link to="/games/debuggingarena">
              <div className="game-card" style={{ backgroundColor: "#319795" }}>
                Debugging Arena 🐞
              </div>
            </Link>

            {/* Multiplayer */}
            <Link to="/games/multiplayer">
              <div className="game-card" style={{ backgroundColor: "#dd6b20" }}>
                Multiplayer ⚔️
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;