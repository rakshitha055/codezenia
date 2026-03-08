// src/pages/games/storyquest/QuestModal.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import CodeEditor from "../../../components/CodeEditor";

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
    { id: 10, question: "Add a footer with copyright info" }
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
    { id: 20, question: "Make a navigation bar with hover effect" }
  ]
};

function QuestModal({ quest, onClose, onComplete }) {

  const [language, setLanguage] = useState("html");
  const [code, setCode] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const worldName =
    quest.title.split(" ")[0] + " " + quest.title.split(" ")[1];

  const questions =
    worldQuestions[worldName] || [{ id: 0, question: quest.description }];

  const handleNext = () => {

    if (currentStep < questions.length - 1) {

      setCurrentStep(currentStep + 1);
      setCode("");

    } else {

      if (onComplete) onComplete(quest.id);

      alert("🎉 Quest Completed!");
      onClose();

    }
  };

  return (

    <div style={overlay}>

      <motion.div
        style={modal}
        initial={{opacity:0,scale:0.9}}
        animate={{opacity:1,scale:1}}
        whileHover={{
          boxShadow:"0 0 35px rgba(0,229,255,0.5)"
        }}
      >

        <h2 style={title}>
          {quest.title} - Step {currentStep + 1}/{questions.length}
        </h2>

        <p style={question}>{questions[currentStep].question}</p>

        <label style={label}>
          Choose Language:
          <select
            value={language}
            onChange={(e)=>setLanguage(e.target.value)}
            style={select}
          >
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JS</option>
            <option value="python">Python</option>
          </select>
        </label>

        <div style={editorContainer}>
          <CodeEditor
            language={language}
            value={code}
            onChange={setCode}
          />
        </div>

        <div style={buttons}>

          <motion.button
            style={closeBtn}
            whileHover={{
              scale:1.08,
              boxShadow:"0 0 15px #ef4444"
            }}
            whileTap={{scale:0.95}}
            onClick={onClose}
          >
            Close
          </motion.button>

          <motion.button
            style={nextBtn}
            whileHover={{
              scale:1.08,
              boxShadow:"0 0 20px #00e5ff"
            }}
            whileTap={{scale:0.95}}
            onClick={handleNext}
          >
            Submit & Next
          </motion.button>

        </div>

      </motion.div>

    </div>
  );
}

export default QuestModal;



/* STYLES */

const overlay = {
  position:"fixed",
  top:0,
  left:0,
  width:"100%",
  height:"100%",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  background:"linear-gradient(135deg,#020617cc,#0f172acc,#1e1b4bcc)",
  backdropFilter:"blur(8px)",
  zIndex:1000
};

const modal = {
  width:"80%",
  maxWidth:"900px",
  padding:"35px",
  borderRadius:"16px",
  background:"rgba(255,255,255,0.06)",
  backdropFilter:"blur(18px)",
  WebkitBackdropFilter:"blur(18px)",
  border:"1px solid rgba(255,255,255,0.15)",
  boxShadow:"0 0 25px rgba(168,85,247,0.3)",
  color:"white",
  fontFamily:"Segoe UI"
};

const title = {
  fontSize:"28px",
  background:"linear-gradient(90deg,#00e5ff,#a855f7)",
  WebkitBackgroundClip:"text",
  color:"transparent"
};

const question = {
  marginTop:"10px",
  opacity:0.9
};

const label = {
  display:"block",
  marginTop:"20px"
};

const select = {
  marginLeft:"10px",
  padding:"6px",
  borderRadius:"6px",
  border:"none"
};

const editorContainer = {
  marginTop:"15px",
  borderRadius:"10px",
  overflow:"hidden",
  border:"1px solid #334155"
};

const buttons = {
  marginTop:"20px",
  display:"flex",
  justifyContent:"flex-end",
  gap:"15px"
};

const closeBtn = {
  padding:"10px 20px",
  border:"none",
  borderRadius:"8px",
  background:"linear-gradient(90deg,#ef4444,#dc2626)",
  color:"white",
  cursor:"pointer"
};

const nextBtn = {
  padding:"10px 20px",
  border:"none",
  borderRadius:"8px",
  background:"linear-gradient(90deg,#00e5ff,#a855f7)",
  color:"white",
  cursor:"pointer"
};