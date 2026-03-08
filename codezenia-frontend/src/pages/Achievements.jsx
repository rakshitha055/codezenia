import React from "react";

function Achievements() {

const achievements = [

{title:"First Code",desc:"Complete your first coding challenge",icon:"🎯",xp:"50 XP"},
{title:"7 Day Streak",desc:"Code for 7 days continuously",icon:"🔥",xp:"150 XP"},
{title:"Problem Solver",desc:"Solve 50 coding problems",icon:"💻",xp:"300 XP"},
{title:"Speed Coder",desc:"Solve a problem in under 5 minutes",icon:"⚡",xp:"200 XP"},
{title:"Level Up",desc:"Reach Level 5 in Codezenia",icon:"⭐",xp:"250 XP"},
{title:"XP Collector",desc:"Earn 1000 XP",icon:"🚀",xp:"400 XP"},
{title:"JS Explorer",desc:"Complete JavaScript roadmap",icon:"🧠",xp:"350 XP"},
{title:"Python Explorer",desc:"Complete Python roadmap",icon:"🐍",xp:"350 XP"}

];

const styles = {

page:{
background:"linear-gradient(135deg,#020617,#0f172a,#1e293b)",
minHeight:"100vh",
padding:"50px",
color:"white",
fontFamily:"Poppins, sans-serif"
},

title:{
textAlign:"center",
fontSize:"40px",
marginBottom:"40px",
background:"linear-gradient(90deg,#38bdf8,#3b82f6)",
WebkitBackgroundClip:"text",
WebkitTextFillColor:"transparent"
},

grid:{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"25px",
maxWidth:"1000px",
margin:"auto"
},

card:{
background:"rgba(255,255,255,0.05)",
border:"1px solid rgba(255,255,255,0.1)",
borderRadius:"15px",
padding:"25px",
textAlign:"center",
backdropFilter:"blur(12px)",
transition:"0.3s",
cursor:"pointer"
},

icon:{
fontSize:"40px",
marginBottom:"10px"
},

xp:{
marginTop:"10px",
display:"inline-block",
background:"#3b82f6",
padding:"5px 12px",
borderRadius:"6px",
fontSize:"12px",
boxShadow:"0 0 10px #38bdf8"
}

};

return(

<div style={styles.page}>

<h1 style={styles.title}>Achievements</h1>

<div style={styles.grid}>

{achievements.map((a,index)=>(

<div
key={index}
style={styles.card}
onMouseEnter={(e)=>{
e.currentTarget.style.transform="translateY(-8px)";
e.currentTarget.style.boxShadow="0 0 15px #38bdf8";
}}
onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0)";
e.currentTarget.style.boxShadow="none";
}}
>

<div style={styles.icon}>{a.icon}</div>

<h3>{a.title}</h3>

<p>{a.desc}</p>

<div style={styles.xp}>{a.xp}</div>

</div>

))}

</div>

</div>

);

}

export default Achievements;