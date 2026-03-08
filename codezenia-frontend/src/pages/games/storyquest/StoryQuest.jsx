import { useState } from "react";
import { motion } from "framer-motion";
import QuestModal from "./QuestModal";
import api from "../../../api";

function StoryQuest() {

  const [showModal, setShowModal] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleComplete = async (questId) => {

    try {
      await api.completeQuest(questId, user?.id);

      alert("Quest Completed! 🎉");

    } catch (err) {
      console.error(err);
      alert("Failed to complete quest.");
    } finally {
      setShowModal(false);
    }

  };

  return (

    <div style={main}>

      <motion.div
        style={card}
        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}
        whileHover={{
          scale:1.02,
          boxShadow:"0 0 40px rgba(0,229,255,0.5)"
        }}
      >

        <h1 style={title}>🌍 Story Quest</h1>

        <p style={subtitle}>
          Save the Digital World by completing coding quests!
        </p>

        <motion.button
          style={startBtn}
          whileHover={{
            scale:1.1,
            boxShadow:"0 0 20px #00e5ff"
          }}
          whileTap={{scale:0.95}}
          onClick={() => setShowModal(true)}
        >
          Start Quest
        </motion.button>

      </motion.div>

      {showModal && (

        <QuestModal
          quest={{
            id:1,
            title:"HTML Island Quest",
            description:"Save the world!"
          }}
          onClose={()=>setShowModal(false)}
          onComplete={handleComplete}
        />

      )}

    </div>

  );

}

export default StoryQuest;



/* STYLES */

const main = {
  minHeight:"100vh",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  background:"linear-gradient(135deg,#020617,#0f172a,#1e1b4b)",
  fontFamily:"Segoe UI",
  color:"white",
  textAlign:"center"
}

const card = {
  padding:"50px",
  borderRadius:"16px",
  background:"rgba(255,255,255,0.06)",
  backdropFilter:"blur(18px)",
  WebkitBackdropFilter:"blur(18px)",
  border:"1px solid rgba(255,255,255,0.15)",
  boxShadow:"0 0 25px rgba(168,85,247,0.3)",
  transition:"all 0.3s ease",
  maxWidth:"500px"
}

const title = {
  fontSize:"42px",
  background:"linear-gradient(90deg,#00e5ff,#a855f7)",
  WebkitBackgroundClip:"text",
  color:"transparent"
}

const subtitle = {
  marginTop:"10px",
  opacity:"0.8"
}

const startBtn = {
  marginTop:"30px",
  padding:"12px 30px",
  border:"none",
  borderRadius:"10px",
  background:"linear-gradient(90deg,#00e5ff,#a855f7)",
  color:"white",
  fontSize:"16px",
  cursor:"pointer"
}