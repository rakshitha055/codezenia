// src/pages/QuestModal.jsx
import { useState } from "react";
import CodeEditor from "../components/CodeEditor"; // code editor component

function QuestModal({ quest, onClose, onComplete }) {
  const [language, setLanguage] = useState("html");
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    console.log(`Code submitted for ${quest.title} in ${language}:`, code);

    // Call Dashboard function to reward XP
    if (onComplete) {
      onComplete(quest.id);
    }

    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100%", height: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex", justifyContent: "center", alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          width: "80%",
          maxWidth: "900px",
        }}
      >
        <h2>{quest.title}</h2>
        <p>{quest.description}</p>

        <label>
          Choose Language:
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{ marginLeft: "10px" }}
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JS</option>
            <option value="python">Python</option>
          </select>
        </label>

        <CodeEditor language={language} value={code} onChange={setCode} />

        <div style={{ marginTop: "10px" }}>
          <button onClick={onClose}>Close</button>
          <button
            style={{
              marginLeft: "10px",
              backgroundColor: "#4ade80",
              color: "#fff",
              padding: "5px 10px",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={handleSubmit}
          >
            Submit Solution
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestModal;