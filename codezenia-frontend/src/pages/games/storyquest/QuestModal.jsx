// src/pages/games/storyquest/QuestModal.jsx
import { useState } from "react";
import CodeEditor from "../../../components/CodeEditor"; // Your code editor component


// Example world questions (minimum 10 per world recommended)
const worldQuestions = {
  "HTML Island": [
    { id: 1, question: "Create a heading (<h1>) with your name" },
    { id: 2, question: "Create a paragraph (<p>) describing yourself" },
    { id: 3, question: "Add an image (<img>) of your favorite animal" },
    { id: 4, question: "Create an ordered list of hobbies" },
    { id: 5, question: "Add a link to your favorite website" },
    { id: 6, question: "Build a simple profile page" },
    { id: 7, question: "Add semantic HTML tags to structure content" },
    { id: 8, question: "Create a table with your favorite foods" },
    { id: 9, question: "Create a form with name and email fields" },
    { id: 10, question: "Add a footer with copyright info" },
  ],
  "CSS Forest": [
    { id: 11, question: "Change the background color of your page" },
    { id: 12, question: "Add padding and margin to a div" },
    { id: 13, question: "Center a div using Flexbox" },
    { id: 14, question: "Create a hover effect on a button" },
    { id: 15, question: "Use Grid layout to arrange 4 boxes" },
    { id: 16, question: "Style a card with border-radius and shadow" },
    { id: 17, question: "Change font-family and font-size" },
    { id: 18, question: "Add a responsive image" },
    { id: 19, question: "Style a list with custom bullets" },
    { id: 20, question: "Make a navigation bar with hover effect" },
  ],
  // Add JavaScript City, React Mountain, API Ocean, AI Kingdom similarly
};

function QuestModal({ quest, onClose, onComplete }) {
  const [language, setLanguage] = useState("html");
  const [code, setCode] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  // Determine the world by splitting title
  const worldName = quest.title.split(" ")[0] + " " + quest.title.split(" ")[1];
  const questions = worldQuestions[worldName] || [{ id: 0, question: quest.description }];

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setCode(""); // Clear editor for next step
    } else {
      // Completed all questions in this world
      if (onComplete) onComplete(quest.id);
      alert("🎉 Quest Completed!");
      onClose();
    }
  };

  return (
    <div className="quest-modal-overlay">
      <div className="quest-modal-container">
        <h2>
          {quest.title} - Step {currentStep + 1}/{questions.length}
        </h2>
        <p>{questions[currentStep].question}</p>

        <label>
          Choose Language:
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JS</option>
            <option value="python">Python</option>
          </select>
        </label>

        <CodeEditor language={language} value={code} onChange={setCode} />

        <div className="quest-modal-buttons">
          <button onClick={onClose}>Close</button>
          <button onClick={handleNext}>Submit & Next</button>
        </div>
      </div>
    </div>
  );
}

export default QuestModal;

