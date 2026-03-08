// src/pages/Dashboard.jsx

import { useState } from "react";
import XPBar from "../components/XPBar";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

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

      {/* Main */}

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

            <div className="game-card">

              <h3>Story Quest 🌍</h3>

              <p>
                Complete coding quests and unlock the story by solving
                programming challenges.
              </p>

              <button
                onClick={() => navigate("/games/storyquest")}
              >
                Start Challenge
              </button>

            </div>

            {/* Debug Arena */}

            <div className="game-card">

              <h3>Debug Arena 🐞</h3>

              <p>
                Find and fix bugs in code. Improve debugging skills
                through real coding challenges.
              </p>

              <button
                onClick={() => navigate("/games/debuggingarena")}
              >
                Start Challenge
              </button>

            </div>

            {/* Puzzle Mode */}

            <div className="game-card">

              <h3>Puzzle Mode 🧩</h3>

              <p>
                Arrange code blocks in the correct order and solve
                programming puzzles.
              </p>

              <button
                onClick={() => navigate("/games/puzzlemode")}
              >
                Start Challenge
              </button>

            </div>

            {/* Battle Lobby */}

            <div className="game-card">

              <h3>Battle Lobby ⚔️</h3>

              <p>
                Join coding battles and compete with other players
                in real-time challenges.
              </p>

              <button
                onClick={() => navigate("/games/battlelobby")}
              >
                Start Challenge
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;