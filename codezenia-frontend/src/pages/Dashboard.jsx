// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { getStoryQuests, completeQuest } from "../api";
import XPBar from "../components/XPBar";        // XP progress bar
import QuestModal from "../pages/QuestModal";         // Modal with code editor (in pages folder)

function Dashboard() {
  const [quests, setQuests] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [selectedQuest, setSelectedQuest] = useState(null); // currently open quest modal

  // Fetch quests from backend
  useEffect(() => {
    const fetchQuests = async () => {
      try {
        const res = await getStoryQuests();
        setQuests(res.data);
      } catch (err) {
        console.error("Failed to fetch quests:", err);
      }
    };
    fetchQuests();
  }, []);

  // Called when user submits code in QuestModal
  const handleComplete = async (questId) => {
    if (!user) return alert("User not logged in!");
    try {
      const res = await completeQuest(questId, user.id);
      alert(res.data.message);

      // Update XP & level in state and localStorage
      const updatedUser = { ...user, xp: res.data.xp, level: res.data.level };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));

      // Close modal automatically
      setSelectedQuest(null);
    } catch (err) {
      console.error("Failed to complete quest:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome, {user?.username}</h2>
      <XPBar xp={user?.xp} level={user?.level} />

      <h3>Story Quests</h3>
      <ul>
        {quests.map((q) => {
          const unlocked = user?.xp >= q.xp_reward;

          return (
            <li key={q.id} style={{ marginBottom: "10px" }}>
              <strong>{q.title}</strong> - {q.description} | XP: {q.xp_reward}
              <button
                style={{
                  marginLeft: "10px",
                  backgroundColor: unlocked ? "#4ade80" : "#aaa",
                  cursor: unlocked ? "pointer" : "not-allowed",
                  color: "#fff",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                }}
                onClick={() => unlocked && setSelectedQuest(q)}
              >
                {unlocked ? "Play Quest" : "Locked"}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Quest Modal */}
      {selectedQuest && (
        <QuestModal
          quest={selectedQuest}
          onClose={() => setSelectedQuest(null)}
          onComplete={handleComplete} // pass complete function to modal
        />
      )}
    </div>
  );
}

export default Dashboard;