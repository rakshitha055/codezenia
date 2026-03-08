import { useState } from "react";
import QuestModal from "./QuestModal";
import api from "../../../api"; // correct import

function StoryQuest() {
  const [showModal, setShowModal] = useState(false);

  // Get logged-in user
  const user = JSON.parse(localStorage.getItem("user"));

  const handleComplete = async (questId) => {
    try {
      await api.completeQuest(questId, user?.id);

      alert("Quest Completed! 🎉");
    } catch (err) {
      console.error(err);
      alert("Failed to complete quest.");
    } finally {
      setShowModal(false);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Story Quest 🌍</h2>
      <p>Save the Digital World by completing coding quests!</p>

      <button
        style={{
          padding: "10px 15px",
          borderRadius: "5px",
          backgroundColor: "#38a169",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}
        onClick={() => setShowModal(true)}
      >
        Start Quest
      </button>

      {showModal && (
        <QuestModal
          quest={{
            id: 1,
            title: "HTML Island Quest",
            description: "Save the world!"
          }}
          onClose={() => setShowModal(false)}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
}

export default StoryQuest;