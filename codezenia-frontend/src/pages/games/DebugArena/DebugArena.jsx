import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function DebugArena() {

  const bugs = [
    {
      question: "Bug #1: Type coercion issue",
      code: `function sum(a, b) {
  return a + b
}

const result = sum(5, "10");`,
      answer: "parseInt"
    },
    {
      question: "Bug #2: Missing return",
      code: `function multiply(a,b){
  a*b
}`,
      answer: "return"
    },
    {
      question: "Bug #3: Wrong variable name",
      code: `let score = 10;
console.log(scor);`,
      answer: "score"
    },
    {
      question: "Bug #4: Array index error",
      code: `let arr = [1,2,3];
console.log(arr[3]);`,
      answer: "2"
    },
    {
      question: "Bug #5: Missing brackets",
      code: `if(true)
console.log("Hello")`,
      answer: "{ }"
    }
  ];

  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [currentBug, setCurrentBug] = useState(0);
  const [bugsFixed, setBugsFixed] = useState(0);
  const [answer, setAnswer] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!gameStarted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setGameOver(true);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted]);

  const checkAnswer = () => {
    if (answer.toLowerCase().includes(bugs[currentBug].answer)) {
      setScore(score + 100);
      setBugsFixed(bugsFixed + 1);
      nextBug();
    } else {
      alert("Wrong fix! Try again.");
    }
  };

  const nextBug = () => {
    setAnswer("");

    if (currentBug + 1 < bugs.length) {
      setCurrentBug(currentBug + 1);
    } else {
      setGameOver(true);
    }
  };

  const startGame = () => {
    setGameStarted(true);
  };

  const restartGame = () => {
    setGameStarted(false);
    setTimeLeft(60);
    setScore(0);
    setCurrentBug(0);
    setBugsFixed(0);
    setAnswer("");
    setGameOver(false);
  };

  return (
    <div style={main}>

      <h1 style={title}>🐛 Debugging Arena</h1>
      <p style={subtitle}>Find and fix bugs before time runs out!</p>

      {!gameStarted && !gameOver && (

        <motion.div
          style={card}
          initial={{opacity:0,scale:0.9}}
          animate={{opacity:1,scale:1}}
          whileHover={{
            scale:1.03,
            boxShadow:"0 0 40px rgba(0,229,255,0.6)"
          }}
        >

          <h2>Ready to Hunt Bugs?</h2>

          <div style={stats}>
            <div>⏱ 60 Seconds</div>
            <div>🐞 5 Bugs</div>
            <div>⚡ 100 XP Each</div>
          </div>

          <motion.button
            whileHover={{
              scale:1.1,
              boxShadow:"0 0 20px #00e5ff"
            }}
            whileTap={{scale:0.95}}
            onClick={startGame}
            style={startBtn}
          >
            Start Debugging
          </motion.button>

        </motion.div>

      )}

      {gameStarted && !gameOver && (

        <div style={{marginTop:"40px"}}>

          <div style={scoreBar}>
            <div>⏱ {timeLeft}s</div>
            <div>⚡ {score} XP</div>
            <div>🐞 {bugsFixed}/5 Fixed</div>
          </div>

          <motion.div
            style={card}
            initial={{opacity:0,y:30}}
            animate={{opacity:1,y:0}}
            whileHover={{
              scale:1.02,
              boxShadow:"0 0 35px rgba(168,85,247,0.6)"
            }}
          >

            <h3>{bugs[currentBug].question}</h3>

            <pre style={code}>
{bugs[currentBug].code}
            </pre>

            <input
              type="text"
              placeholder="Type the fix..."
              value={answer}
              onChange={(e)=>setAnswer(e.target.value)}
              style={input}
            />

            <motion.button
              whileHover={{
                scale:1.05,
                boxShadow:"0 0 20px #22c55e"
              }}
              whileTap={{scale:0.95}}
              onClick={checkAnswer}
              style={fixBtn}
            >
              ✔ Fixed It
            </motion.button>

          </motion.div>

        </div>

      )}

      {gameOver && (

        <motion.div
          style={card}
          initial={{opacity:0,scale:0.8}}
          animate={{opacity:1,scale:1}}
          whileHover={{
            scale:1.03,
            boxShadow:"0 0 35px rgba(0,229,255,0.5)"
          }}
        >

          <h2>🏁 Game Over</h2>
          <p style={{fontSize:"20px"}}>Your Score: {score} XP</p>

          <motion.button
            whileHover={{
              scale:1.1,
              boxShadow:"0 0 20px #00e5ff"
            }}
            whileTap={{scale:0.95}}
            onClick={restartGame}
            style={startBtn}
          >
            Play Again
          </motion.button>

        </motion.div>

      )}

    </div>
  );
}

export default DebugArena;



/* STYLES */

const main = {
  minHeight:"100vh",
  padding:"50px",
  background:"linear-gradient(135deg,#020617,#0f172a,#1e1b4b)",
  color:"white",
  fontFamily:"Segoe UI",
  textAlign:"center"
}

const title = {
  fontSize:"48px",
  background:"linear-gradient(90deg,#00e5ff,#a855f7)",
  WebkitBackgroundClip:"text",
  color:"transparent"
}

const subtitle = {
  opacity:"0.8",
  marginTop:"10px"
}

const card = {
  background:"rgba(255,255,255,0.06)",
  backdropFilter:"blur(18px)",
  WebkitBackdropFilter:"blur(18px)",
  padding:"40px",
  marginTop:"30px",
  borderRadius:"16px",
  border:"1px solid rgba(255,255,255,0.15)",
  boxShadow:"0 0 25px rgba(168,85,247,0.25)",
  transition:"all 0.3s ease"
}

const stats = {
  display:"flex",
  justifyContent:"center",
  gap:"30px",
  marginTop:"20px"
}

const scoreBar = {
  display:"flex",
  justifyContent:"center",
  gap:"40px",
  marginBottom:"20px",
  fontSize:"18px"
}

const code = {
  background:"#020617",
  padding:"20px",
  borderRadius:"10px",
  textAlign:"left",
  marginTop:"15px",
  color:"#00e5ff",
  border:"1px solid #334155"
}

const input = {
  width:"100%",
  padding:"12px",
  marginTop:"15px",
  borderRadius:"8px",
  border:"none",
  outline:"none"
}

const startBtn = {
  marginTop:"25px",
  padding:"12px 30px",
  background:"linear-gradient(90deg,#00e5ff,#a855f7)",
  border:"none",
  borderRadius:"10px",
  color:"white",
  cursor:"pointer",
  fontSize:"16px"
}

const fixBtn = {
  marginTop:"15px",
  padding:"10px 25px",
  background:"linear-gradient(90deg,#22c55e,#16a34a)",
  border:"none",
  borderRadius:"8px",
  color:"white",
  cursor:"pointer"
}