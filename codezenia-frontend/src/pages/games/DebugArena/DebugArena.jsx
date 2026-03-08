import { useState, useEffect } from "react";

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
    <div style={{ padding: "40px", background: "#1a202c", color: "white", minHeight: "100vh" }}>

      <h1>Debugging Arena 🐛</h1>
      <p>Find and fix bugs as fast as you can!</p>

      {!gameStarted && !gameOver && (
        <div style={{
          background: "#2d3748",
          padding: "40px",
          marginTop: "30px",
          borderRadius: "10px",
          textAlign: "center"
        }}>
          <h2>Ready to Hunt Bugs?</h2>

          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
            <div>⏱ 60 Seconds</div>
            <div>🐞 5 Bugs</div>
            <div>⚡ 100 pts each</div>
          </div>

          <button
            onClick={startGame}
            style={{
              marginTop: "30px",
              padding: "12px 30px",
              background: "orange",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Start Debugging
          </button>
        </div>
      )}

      {gameStarted && !gameOver && (
        <div style={{ marginTop: "30px" }}>

          <div style={{ display: "flex", gap: "30px", marginBottom: "20px" }}>
            <div>⏱ Time Left: {timeLeft}s</div>
            <div>⚡ Score: {score}</div>
            <div>🐞 Bugs Fixed: {bugsFixed}/5</div>
          </div>

          <div style={{ background: "#2d3748", padding: "30px", borderRadius: "10px" }}>
            <h3>{bugs[currentBug].question}</h3>

            <pre style={{ background: "#1a202c", padding: "20px", borderRadius: "8px" }}>
{bugs[currentBug].code}
            </pre>

            <input
              type="text"
              placeholder="Type the fix..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "15px",
                borderRadius: "5px",
                border: "none"
              }}
            />

            <button
              onClick={checkAnswer}
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                background: "green",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              ✔ Fixed It!
            </button>

          </div>
        </div>
      )}

      {gameOver && (
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <h2>Game Over</h2>
          <p>Your Score: {score}</p>

          <button
            onClick={restartGame}
            style={{
              padding: "10px 25px",
              background: "orange",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Play Again
          </button>
        </div>
      )}

    </div>
  );
}

export default DebugArena;