import React from "react";

function Leaderboard() {

const players = [
{rank:1,name:"Arjun",xp:1200,level:8},
{rank:2,name:"Kiran",xp:1050,level:7},
{rank:3,name:"Rahul",xp:980,level:7},
{rank:4,name:"Priya",xp:850,level:6},
{rank:5,name:"Vikram",xp:760,level:6},
{rank:6,name:"Sneha",xp:650,level:5}
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

card:{
maxWidth:"900px",
margin:"auto",
background:"rgba(255,255,255,0.05)",
border:"1px solid rgba(255,255,255,0.1)",
borderRadius:"15px",
backdropFilter:"blur(12px)",
padding:"30px",
boxShadow:"0 0 20px rgba(56,189,248,0.3)"
},

table:{
width:"100%",
borderCollapse:"collapse"
},

th:{
padding:"15px",
borderBottom:"1px solid rgba(255,255,255,0.1)",
textAlign:"left",
color:"#38bdf8"
},

td:{
padding:"15px",
borderBottom:"1px solid rgba(255,255,255,0.05)"
},

row:{
transition:"0.3s"
}

};

return(

<div style={styles.page}>

<h1 style={styles.title}>🏆 Codezenia Leaderboard</h1>

<div style={styles.card}>

<table style={styles.table}>

<thead>
<tr>
<th style={styles.th}>Rank</th>
<th style={styles.th}>Player</th>
<th style={styles.th}>Level</th>
<th style={styles.th}>XP</th>
</tr>
</thead>

<tbody>

{players.map((player,index)=>(

<tr
key={index}
style={styles.row}
onMouseEnter={(e)=>{
e.currentTarget.style.background="rgba(56,189,248,0.1)";
e.currentTarget.style.boxShadow="0 0 10px #38bdf8";
}}
onMouseLeave={(e)=>{
e.currentTarget.style.background="transparent";
e.currentTarget.style.boxShadow="none";
}}
>

<td style={styles.td}>{player.rank}</td>
<td style={styles.td}>{player.name}</td>
<td style={styles.td}>⭐ {player.level}</td>
<td style={styles.td}>{player.xp}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

);

}

export default Leaderboard;