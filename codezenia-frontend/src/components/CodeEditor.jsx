import Editor from "@monaco-editor/react";
import { useState } from "react";

function CodeEditor({ language, value, onChange }) {
  const [hover, setHover] = useState(false);

  return (
    <div style={styles.wrapper}>
      
      {/* Glass Morphic Card */}
      <div
        style={{
          ...styles.card,
          boxShadow: hover
            ? "0 0 25px rgba(0,255,255,0.6)"
            : "0 0 10px rgba(0,255,255,0.2)",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.title}>💻 Code Editor</span>

          <span style={styles.languageTag}>
            {language.toUpperCase()}
          </span>
        </div>

        {/* Monaco Editor */}
        <Editor
          height="420px"
          language={language}
          theme="vs-dark"
          value={value || ""}
          onChange={(val) => onChange(val)}
          options={{
            minimap: { enabled: false },
            fontSize: 16,
            wordWrap: "on",
            fontFamily: "Fira Code, monospace",
            smoothScrolling: true,
            cursorBlinking: "smooth",
          }}
        />

      </div>
    </div>
  );
}

export default CodeEditor;


/* ---------------- STYLES ---------------- */

const styles = {

  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },

  card: {
    width: "100%",
    borderRadius: "14px",
    backdropFilter: "blur(15px)",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(0,255,255,0.2)",
    overflow: "hidden",
    transition: "all 0.4s ease",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px",
    background: "linear-gradient(90deg,#0f172a,#020617)",
    borderBottom: "1px solid rgba(0,255,255,0.2)",
  },

  title: {
    color: "#22d3ee",
    fontWeight: "bold",
    letterSpacing: "1px",
  },

  languageTag: {
    background: "rgba(0,255,255,0.15)",
    color: "#22d3ee",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    border: "1px solid rgba(0,255,255,0.3)",
  },
};