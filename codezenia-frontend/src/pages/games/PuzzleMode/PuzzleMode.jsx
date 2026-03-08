import React, { useState } from "react";
import { motion } from "framer-motion";

const puzzles = [
  {
    title: "Hello World Function",
    blocks: [
      'console.log("Hello World");',
      'function sayHello() {',
      '}',
      'sayHello();'
    ],
    answer: [
      'function sayHello() {',
      'console.log("Hello World");',
      '}',
      'sayHello();'
    ]
  },
  {
    title: "Add Two Numbers",
    blocks: [
      'console.log(a + b);',
      '}',
      'function add(a, b) {',
      'add(5,3);'
    ],
    answer: [
      'function add(a, b) {',
      'console.log(a + b);',
      '}',
      'add(5,3);'
    ]
  }
];

function PuzzleMode() {

  const [level, setLevel] = useState(0);
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [message, setMessage] = useState("");

  const puzzle = puzzles[level];

  const addBlock = (block) => {
    setSelectedBlocks([...selectedBlocks, block]);
  };

  const reset = () => {
    setSelectedBlocks([]);
    setMessage("");
  };

  const checkAnswer = () => {

    const correct =
      JSON.stringify(selectedBlocks) ===
      JSON.stringify(puzzle.answer);

    if (correct) {
      setMessage("✅ Correct!");
      if (level < puzzles.length - 1) {
        setTimeout(() => {
          setLevel(level + 1);
          reset();
        }, 1500);
      }
    } else {
      setMessage("❌ Wrong Order");
    }
  };

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>🧩 Puzzle Mode</h1>

      <motion.div
        style={styles.card}
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
      >

        <h2>{puzzle.title}</h2>

        <div style={styles.blockContainer}>
          {puzzle.blocks.map((block, index) => (

            <motion.button
              key={index}
              style={styles.block}
              onClick={() => addBlock(block)}
              whileHover={{
                scale:1.05,
                boxShadow:"0 0 15px #00e5ff"
              }}
              whileTap={{scale:0.95}}
            >
              {block}
            </motion.button>

          ))}
        </div>

        <h3 style={{marginTop:"30px"}}>💻 Your Code</h3>

        <div style={styles.codeArea}>
          {selectedBlocks.map((b, i) => (
            <div key={i}>{b}</div>
          ))}
        </div>

        <div style={styles.buttons}>

          <motion.button
            onClick={checkAnswer}
            style={styles.checkBtn}
            whileHover={{scale:1.1}}
            whileTap={{scale:0.95}}
          >
            ✔ Check
          </motion.button>

          <motion.button
            onClick={reset}
            style={styles.resetBtn}
            whileHover={{scale:1.1}}
            whileTap={{scale:0.95}}
          >
            Reset
          </motion.button>

        </div>

        <h3 style={{marginTop:"20px"}}>{message}</h3>

      </motion.div>

    </div>
  );
}

export default PuzzleMode;



const styles = {

  container:{
    minHeight:"100vh",
    padding:"40px",
    background:"linear-gradient(135deg,#020617,#0f172a,#1e1b4b)",
    color:"white",
    textAlign:"center",
    fontFamily:"Segoe UI"
  },

  title:{
    fontSize:"45px",
    background:"linear-gradient(90deg,#00e5ff,#a855f7)",
    WebkitBackgroundClip:"text",
    color:"transparent",
    marginBottom:"30px"
  },

  card:{
    maxWidth:"700px",
    margin:"auto",
    padding:"40px",
    background:"rgba(255,255,255,0.05)",
    backdropFilter:"blur(12px)",
    borderRadius:"15px",
    border:"1px solid rgba(255,255,255,0.1)",
    boxShadow:"0 0 30px rgba(168,85,247,0.3)"
  },

  blockContainer:{
    marginTop:"20px"
  },

  block:{
    display:"block",
    width:"100%",
    margin:"10px 0",
    padding:"12px",
    background:"#020617",
    color:"#00e5ff",
    border:"1px solid #334155",
    borderRadius:"8px",
    cursor:"pointer",
    textAlign:"left"
  },

  codeArea:{
    background:"#020617",
    padding:"20px",
    marginTop:"15px",
    minHeight:"120px",
    borderRadius:"10px",
    border:"1px solid #334155",
    textAlign:"left"
  },

  buttons:{
    marginTop:"25px",
    display:"flex",
    justifyContent:"center",
    gap:"20px"
  },

  checkBtn:{
    padding:"10px 25px",
    background:"linear-gradient(90deg,#22c55e,#16a34a)",
    border:"none",
    borderRadius:"8px",
    color:"white",
    cursor:"pointer"
  },

  resetBtn:{
    padding:"10px 25px",
    background:"linear-gradient(90deg,#ef4444,#dc2626)",
    border:"none",
    borderRadius:"8px",
    color:"white",
    cursor:"pointer"
  }

};