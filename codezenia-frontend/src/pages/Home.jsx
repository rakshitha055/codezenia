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
        <h2 style={sectionTitle}>🚀 Features</h2>

        <div style={grid}>

          <Feature
          title="🎮 Gamified Learning"
          text="Level up by solving coding challenges and unlock new quests."
          />

          <Feature
          title="🤖 AI Mentor"
          text="Stuck on a problem? Get instant hints and explanations."
          />

          <Feature
          title="🏆 Leaderboards"
          text="Compete with coders worldwide and climb the ranking."
          />

          <Feature
          title="🧩 Coding Puzzles"
          text="Improve logic with fun algorithm and puzzle challenges."
          />

        </div>
      </section>



      {/* ACHIEVEMENTS */}

      <section style={section}>
        <h2 style={sectionTitle}>🏅 Achievements</h2>

        <div style={grid}>

          <Feature
          title="🔥 Daily Streak"
          text="Maintain daily coding streak and build consistency."
          />

          <Feature
          title="⭐ XP Points"
          text="Earn XP points for every quest you complete."
          />

          <Feature
          title="🎯 Skill Badges"
          text="Unlock badges for mastering programming skills."
          />

          <Feature
          title="👑 Elite Rank"
          text="Top players reach the elite developer leaderboard."
          />

        </div>
      </section>



      {/* HOW IT WORKS */}

      <section style={section}>
        <h2 style={sectionTitle}>⚙️ How It Works</h2>

        <div style={grid}>

          <Feature
          title="1️⃣ Create Account"
          text="Sign up and start your coding adventure in seconds."
          />

          <Feature
          title="2️⃣ Choose Challenges"
          text="Pick coding quests from beginner to advanced levels."
          />

          <Feature
          title="3️⃣ Solve & Gain XP"
          text="Solve problems, gain XP, unlock achievements."
          />

          <Feature
          title="4️⃣ Climb Leaderboard"
          text="Compete with developers and reach the top."
          />

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



/* CARD COMPONENT */

const Feature = ({title,text}) => (

  <motion.div
  style={card}
  initial={{opacity:0,y:40}}
  whileInView={{opacity:1,y:0}}
  transition={{duration:0.6}}
  viewport={{once:true}}
  whileHover={{
    scale:1.07,
    rotate:1,
    boxShadow:"0px 10px 30px rgba(0,229,255,0.4)"
  }}
  >

    <h3>{title}</h3>
    <p style={{marginTop:"10px",opacity:"0.9"}}>{text}</p>

  </motion.div>

);



/* STYLES */

const main = {
  background:"linear-gradient(135deg,#020617,#0f172a)",
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
  gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
  gap:"25px"
}

const card = {
  background:"rgba(255,255,255,0.05)",
  backdropFilter:"blur(10px)",
  padding:"25px",
  borderRadius:"12px",
  border:"1px solid rgba(255,255,255,0.08)",
  cursor:"pointer",
  transition:"0.3s"
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