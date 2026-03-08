import React, { useState } from "react";

const initialBattles = [
  {
    name: "CSS Grid Showdown",
    topic: "CSS",
    difficulty: "Medium",
    players: "3/4",
    time: "15 min",
    status: "Waiting"
  },
  {
    name: "DOM Boss Rush",
    topic: "JavaScript",
    difficulty: "Hard",
    players: "2/2",
    time: "20 min",
    status: "In Progress"
  },
  {
    name: "Flexbox Frenzy",
    topic: "CSS",
    difficulty: "Easy",
    players: "1/4",
    time: "10 min",
    status: "Waiting"
  },
  {
    name: "Algorithm Arena",
    topic: "Algorithms",
    difficulty: "Epic",
    players: "4/6",
    time: "30 min",
    status: "Starting Soon"
  }
];

function BattleLobby() {

  const [battles, setBattles] = useState(initialBattles);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [newBattle, setNewBattle] = useState({
    name: "",
    topic: "JavaScript",
    difficulty: "Easy",
    players: "1/2",
    time: "10 min",
    status: "Waiting"
  });

  /* JOIN BATTLE */

  const handleJoinBattle = (index) => {

    const updatedBattles = [...battles];
    const battle = updatedBattles[index];

    const playersSplit = battle.players.split("/");
    let current = parseInt(playersSplit[0]);
    const max = parseInt(playersSplit[1]);

    if (current >= max) {
      alert("Battle is Full!");
      return;
    }

    current++;

    battle.players = `${current}/${max}`;

    if (current === max) {
      battle.status = "In Progress";
    }

    updatedBattles[index] = battle;

    setBattles(updatedBattles);
  };

  /* CREATE BATTLE */

  const handleCreateBattle = () => {

    if (!newBattle.name) {
      alert("Enter battle name");
      return;
    }

    setBattles([...battles, newBattle]);

    setShowModal(false);

    setNewBattle({
      name: "",
      topic: "JavaScript",
      difficulty: "Easy",
      players: "1/2",
      time: "10 min",
      status: "Waiting"
    });
  };

  /* SEARCH FILTER */

  const filteredBattles = battles.filter((battle) =>
    battle.name.toLowerCase().includes(search.toLowerCase()) ||
    battle.topic.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>

      {/* HEADER */}

      <div style={styles.header}>

        <div>
          <h1 style={styles.title}>⚔ Battle Lobby</h1>
          <p style={styles.subtitle}>
            Join a coding battle or create your own arena
          </p>
        </div>

        <div style={styles.rightHeader}>
          <span style={styles.online}>🟢 847 players online</span>

          <button
            style={styles.createBtn}
            onClick={() => setShowModal(true)}
          >
            + Create Battle
          </button>
        </div>

      </div>

      {/* SEARCH */}

      <input
        placeholder="Search battles, topics..."
        style={styles.search}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* BATTLE CARDS */}

      <div style={styles.grid}>

        {filteredBattles.map((battle, index) => {

          const [current, max] = battle.players.split("/");

          const isFull = parseInt(current) >= parseInt(max);

          return (

            <div key={index} style={styles.card}>

              <h3>{battle.name}</h3>

              <p style={styles.tag}>{battle.topic}</p>

              <p>Difficulty: {battle.difficulty}</p>
              <p>Time: {battle.time}</p>
              <p>Players: {battle.players}</p>

              <p style={styles.status}>
                {battle.status}
              </p>

              <button
                style={{
                  ...styles.joinBtn,
                  opacity: isFull ? 0.5 : 1,
                  cursor: isFull ? "not-allowed" : "pointer"
                }}
                disabled={isFull}
                onClick={() => handleJoinBattle(index)}
              >
                {isFull ? "Full" : "Join ▶"}
              </button>

            </div>

          );
        })}

      </div>

      {/* CREATE BATTLE MODAL */}

      {showModal && (

        <div style={styles.modal}>

          <div style={styles.modalBox}>

            <h2>Create Battle</h2>

            <input
              style={styles.input}
              placeholder="Battle Name"
              value={newBattle.name}
              onChange={(e) =>
                setNewBattle({ ...newBattle, name: e.target.value })
              }
            />

            <select
              style={styles.input}
              onChange={(e) =>
                setNewBattle({ ...newBattle, topic: e.target.value })
              }
            >
              <option>JavaScript</option>
              <option>React</option>
              <option>CSS</option>
              <option>Algorithms</option>
            </select>

            <select
              style={styles.input}
              onChange={(e) =>
                setNewBattle({ ...newBattle, difficulty: e.target.value })
              }
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>

            <select
              style={styles.input}
              onChange={(e) =>
                setNewBattle({ ...newBattle, players: `1/${e.target.value}` })
              }
            >
              <option value="2">2 Players</option>
              <option value="4">4 Players</option>
              <option value="6">6 Players</option>
            </select>

            <select
              style={styles.input}
              onChange={(e) =>
                setNewBattle({ ...newBattle, time: e.target.value })
              }
            >
              <option>10 min</option>
              <option>15 min</option>
              <option>20 min</option>
            </select>

            <div style={styles.modalBtns}>

              <button
                style={styles.launchBtn}
                onClick={handleCreateBattle}
              >
                Launch Battle
              </button>

              <button
                style={styles.closeBtn}
                onClick={() => setShowModal(false)}
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

/* STYLES */

const styles = {

  container: {
    background: "linear-gradient(135deg,#020617,#0f172a,#020617)",
    minHeight: "100vh",
    padding: "40px",
    color: "white",
    fontFamily: "sans-serif"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  title: {
    fontSize: "34px"
  },

  subtitle: {
    color: "#94a3b8"
  },

  rightHeader: {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  },

  online: {
    color: "#22c55e",
    fontWeight: "bold"
  },

  createBtn: {
    background: "linear-gradient(90deg,#06b6d4,#a855f7)",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer"
  },

  search: {
    marginTop: "30px",
    padding: "12px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #334155",
    background: "rgba(15,23,42,0.6)",
    backdropFilter: "blur(10px)",
    color: "white"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "25px",
    marginTop: "40px"
  },

  card: {
    background: "rgba(15,23,42,0.6)",
    backdropFilter: "blur(10px)",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid rgba(56,189,248,0.2)",
    transition: "0.3s",
    boxShadow: "0 0 15px rgba(0,255,255,0.1)"
  },

  tag: {
    color: "#38bdf8"
  },

  status: {
    color: "#22c55e",
    fontWeight: "bold"
  },

  joinBtn: {
    marginTop: "10px",
    background: "linear-gradient(90deg,#06b6d4,#22c55e)",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    color: "white"
  },

  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  modalBox: {
    background: "rgba(15,23,42,0.9)",
    backdropFilter: "blur(20px)",
    padding: "30px",
    borderRadius: "12px",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    border: "1px solid #38bdf8"
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#1e293b",
    color: "white"
  },

  modalBtns: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px"
  },

  launchBtn: {
    background: "#06b6d4",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    color: "white"
  },

  closeBtn: {
    background: "#ef4444",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    color: "white"
  }

};

export default BattleLobby;