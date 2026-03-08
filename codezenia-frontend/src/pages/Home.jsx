import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div style={main}>

      {/* NAVBAR */}

      <nav style={nav}>
        <h2 style={{color:"#00e5ff"}}>🌍 Codezenia</h2>

        <div>
          <Link to="/login"><button style={btn}>Login</button></Link>
          <Link to="/register"><button style={btn}>Register</button></Link>
        </div>
      </nav>


      {/* HERO */}

      <section style={hero}>

        <motion.h1
        initial={{opacity:0,y:-40}}
        animate={{opacity:1,y:0}}
        transition={{duration:1}}
        style={title}
        >
        Welcome to Codezenia
        </motion.h1>

        <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.5}}
        style={subtitle}
        >
        Enter the world of coding. Complete quests, gain XP and become a legendary developer.
        </motion.p>

        <Link to="/register">
          <button style={startBtn}>Start Your Coding Journey</button>
        </Link>

      </section>



      {/* FEATURES */}

      <section style={section}>
        <h2 style={sectionTitle}>🚀 Platform Features</h2>

        <div style={grid}>

          <Feature title="🎮 Gamified Learning" text="Level up by solving coding challenges and unlock new quests." />
          <Feature title="🤖 AI Mentor" text="Get instant hints, explanations and debugging help." />
          <Feature title="⚔ Coding Battles" text="Fight real-time coding battles with other developers." />
          <Feature title="🏆 Leaderboards" text="Compete globally and climb the ranking ladder." />
          <Feature title="🧩 Coding Puzzles" text="Improve logic with algorithm and puzzle challenges." />
          <Feature title="📊 Progress Tracker" text="Track your XP, completed quests and learning progress." />
          <Feature title="🎯 Daily Challenges" text="Solve daily coding missions and maintain streaks." />
          <Feature title="🌍 Global Community" text="Join thousands of coders learning together." />

        </div>
      </section>



      {/* ACHIEVEMENTS */}

      <section style={section}>
        <h2 style={sectionTitle}>🏅 Achievements</h2>

        <div style={grid}>

          <Feature title="🔥 Daily Streak" text="Maintain coding streaks and stay consistent." />
          <Feature title="⭐ XP Points" text="Earn XP for every challenge you complete." />
          <Feature title="🎯 Skill Badges" text="Unlock badges for mastering programming skills." />
          <Feature title="👑 Elite Rank" text="Reach the elite developer leaderboard." />

        </div>
      </section>



      {/* HOW IT WORKS */}

      <section style={section}>
        <h2 style={sectionTitle}>⚙️ How It Works</h2>

        <div style={grid}>

          <Feature title="1️⃣ Create Account" text="Sign up and start your coding adventure instantly." />
          <Feature title="2️⃣ Choose Quests" text="Pick coding quests from beginner to advanced." />
          <Feature title="3️⃣ Solve & Gain XP" text="Complete coding missions and gain experience points." />
          <Feature title="4️⃣ Become Legend" text="Climb leaderboards and become a legendary developer." />

        </div>
      </section>



      {/* CTA */}

      <section style={cta}>
        <h2>Ready to enter Codezenia?</h2>

        <Link to="/register">
          <button style={startBtn}>Create Account</button>
        </Link>

      </section>



      {/* FOOTER */}

      <footer style={footer}>
        <p>© 2026 Codezenia • The Coding World</p>
      </footer>

    </div>
  );
}

export default Home;



/* FEATURE CARD */

const Feature = ({title,text}) => (

  <motion.div
  style={card}
  initial={{opacity:0,y:40}}
  whileInView={{opacity:1,y:0}}
  transition={{duration:0.6}}
  viewport={{once:true}}
  whileHover={{
    scale:1.05,
    boxShadow:"0px 0px 25px rgba(0,229,255,0.6)"
  }}
  >

    <h3>{title}</h3>
    <p style={cardText}>{text}</p>

  </motion.div>

);



/* STYLES */

const main = {
  background:"linear-gradient(135deg,#020617,#0f172a,#020617)",
  color:"white",
  fontFamily:"Segoe UI"
}

const nav = {
  display:"flex",
  justifyContent:"space-between",
  padding:"20px 60px",
  background:"rgba(255,255,255,0.05)",
  backdropFilter:"blur(10px)"
}

const hero = {
  height:"90vh",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  textAlign:"center"
}

const title = {
  fontSize:"60px",
  background:"linear-gradient(90deg,#00e5ff,#7c3aed)",
  WebkitBackgroundClip:"text",
  color:"transparent"
}

const subtitle = {
  maxWidth:"600px",
  marginTop:"20px",
  fontSize:"20px"
}

const section = {
  padding:"80px 60px",
  textAlign:"center"
}

const sectionTitle = {
  marginBottom:"40px",
  fontSize:"32px"
}

const grid = {
  display:"grid",
  gridTemplateColumns:"repeat(4,1fr)",
  gap:"40px",
  alignItems:"stretch"
}

const card = {
  background:"rgba(255,255,255,0.05)",
  backdropFilter:"blur(12px)",
  padding:"25px",
  borderRadius:"12px",
  border:"1px solid rgba(255,255,255,0.08)",
  cursor:"pointer",
  transition:"0.3s",
  minHeight:"150px",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  textAlign:"center"
}

const cardText = {
  marginTop:"10px",
  opacity:"0.9"
}

const btn = {
  padding:"10px 20px",
  marginLeft:"10px",
  border:"none",
  borderRadius:"8px",
  background:"#7c3aed",
  color:"white",
  cursor:"pointer"
}

const startBtn = {
  padding:"12px 30px",
  marginTop:"30px",
  border:"none",
  borderRadius:"10px",
  background:"#00e5ff",
  color:"#020617",
  fontSize:"16px",
  cursor:"pointer"
}

const cta = {
  padding:"80px",
  textAlign:"center",
  background:"linear-gradient(135deg,#7c3aed,#00e5ff)"
}

const footer = {
  padding:"30px",
  textAlign:"center",
  background:"#020617"
}