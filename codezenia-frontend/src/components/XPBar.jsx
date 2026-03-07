// src/components/XPBar.jsx
import React from "react";

function XPBar({ xp = 0, level = 1 }) {
  // Calculate XP needed for next level
  const nextLevelXP = level * 100;
  const percent = Math.min((xp / nextLevelXP) * 100, 100);

  return (
    <div style={{ margin: "20px 0" }}>
      <p>
        Level: {level} | XP: {xp} / {nextLevelXP}
      </p>
      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#ddd",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            backgroundColor: "#4ade80",
            borderRadius: "10px 0 0 10px",
            transition: "width 0.5s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
}

export default XPBar;