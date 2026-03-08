import React, { useState } from "react";

function Profile() {

const [username,setUsername] = useState("Rakshitha");

const [avatar,setAvatar] = useState(
"https://api.dicebear.com/7.x/adventurer/svg?seed=Rakshitha"
);

const handleAvatarChange = () => {
const random = Math.floor(Math.random()*1000);
setAvatar(`https://api.dicebear.com/7.x/adventurer/svg?seed=${random}`);
};

const styles={

page:{
background:"#020617",
minHeight:"100vh",
padding:"40px",
color:"white",
fontFamily:"sans-serif"
},

card:{
background:"rgba(255,255,255,0.05)",
padding:"30px",
borderRadius:"12px",
maxWidth:"900px",
margin:"auto"
},

header:{
display:"flex",
alignItems:"center",
gap:"20px",
marginBottom:"20px"
},

avatar:{
width:"80px",
height:"80px",
borderRadius:"50%",
border:"3px solid #22c55e"
},

input:{
padding:"8px",
borderRadius:"6px",
border:"none"
},

button:{
padding:"8px 12px",
marginLeft:"10px",
background:"#22c55e",
border:"none",
borderRadius:"6px",
cursor:"pointer"
},

section:{
marginTop:"30px"
},

progress:{
height:"10px",
background:"#334155",
borderRadius:"10px",
overflow:"hidden"
},

progressFill:{
height:"100%",
background:"#22c55e",
width:"70%"
},

skills:{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"15px"
},

skillBar:{
height:"8px",
background:"#334155",
borderRadius:"8px"
},

skillFill:{
height:"100%",
background:"#38bdf8"
}

};

return(

<div style={styles.page}>

<div style={styles.card}>

{/* Header */}

<div style={styles.header}>

<img src={avatar} style={styles.avatar} alt="avatar"/>

<div>

<input
value={username}
onChange={(e)=>setUsername(e.target.value)}
style={styles.input}
/>

<button
style={styles.button}
onClick={handleAvatarChange}
>
Change Avatar
</button>

<div>Level 5 | 1450 XP</div>

</div>

</div>

{/* XP */}

<div style={styles.section}>

<h3>XP Progress</h3>

<div style={styles.progress}>
<div style={styles.progressFill}></div>
</div>

</div>

{/* Stats */}

<div style={styles.section}>

<h3>Stats</h3>

<p>Challenges Completed: 25</p>
<p>Debug Wins: 8</p>
<p>Puzzle Solved: 12</p>

</div>

{/* Skills */}

<div style={styles.section}>

<h3>Skills</h3>

<div style={styles.skills}>

<div>
HTML
<div style={styles.skillBar}>
<div style={{...styles.skillFill,width:"70%"}}></div>
</div>
</div>

<div>
CSS
<div style={styles.skillBar}>
<div style={{...styles.skillFill,width:"50%"}}></div>
</div>
</div>

<div>
JavaScript
<div style={styles.skillBar}>
<div style={{...styles.skillFill,width:"30%"}}></div>
</div>
</div>

<div>
Python
<div style={styles.skillBar}>
<div style={{...styles.skillFill,width:"20%"}}></div>
</div>
</div>

</div>

</div>

{/* Achievements */}

<div style={styles.section}>

<h3>Achievements</h3>

<p>🏆 🔥 🐞 ⚔</p>

</div>

{/* Activity */}

<div style={styles.section}>

<h3>Recent Activity</h3>

<p>Completed HTML Forms</p>
<p>Won Battle Lobby</p>

</div>

</div>

</div>

);

}

export default Profile;