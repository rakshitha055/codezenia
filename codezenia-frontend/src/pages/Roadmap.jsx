import React, { useState } from "react";

const roadmaps = {

html:[
{title:"HTML Introduction",xp:"50 XP",side:"left"},
{title:"HTML Elements",xp:"80 XP",side:"right"},
{title:"Links & Images",xp:"120 XP",side:"left"},
{title:"Lists",xp:"150 XP",side:"right"},
{title:"Tables",xp:"200 XP",side:"left"},
{title:"Forms",xp:"250 XP",side:"right"},
{title:"Semantic HTML",xp:"300 XP",side:"left"}
],

css:[
{title:"CSS Introduction",xp:"50 XP",side:"left"},
{title:"Selectors",xp:"100 XP",side:"right"},
{title:"Box Model",xp:"150 XP",side:"left"},
{title:"Flexbox",xp:"200 XP",side:"right"},
{title:"Grid",xp:"250 XP",side:"left"},
{title:"Responsive Design",xp:"300 XP",side:"right"},
{title:"Animations",xp:"350 XP",side:"left"}
],

javascript:[
{title:"Variables",xp:"100 XP",side:"left"},
{title:"Data Types",xp:"120 XP",side:"right"},
{title:"Conditions",xp:"150 XP",side:"left"},
{title:"Loops",xp:"200 XP",side:"right"},
{title:"Functions",xp:"250 XP",side:"left"},
{title:"Arrays",xp:"300 XP",side:"right"},
{title:"DOM Manipulation",xp:"350 XP",side:"left"},
{title:"Async JS",xp:"400 XP",side:"right"}
],

python:[
{title:"Python Intro",xp:"100 XP",side:"left"},
{title:"Variables",xp:"120 XP",side:"right"},
{title:"Conditions",xp:"150 XP",side:"left"},
{title:"Loops",xp:"200 XP",side:"right"},
{title:"Functions",xp:"250 XP",side:"left"},
{title:"Lists",xp:"300 XP",side:"right"},
{title:"OOP",xp:"350 XP",side:"left"},
{title:"File Handling",xp:"400 XP",side:"right"}
]

};

function Roadmap(){

const [active,setActive]=useState("html");
const [hover,setHover]=useState(null);

const styles={

page:{
background:"linear-gradient(135deg,#020617,#0f172a,#1e293b)",
minHeight:"100vh",
padding:"50px",
color:"white",
textAlign:"center",
fontFamily:"Poppins, sans-serif"
},

title:{
fontSize:"42px",
marginBottom:"20px",
background:"linear-gradient(90deg,#38bdf8,#3b82f6)",
WebkitBackgroundClip:"text",
WebkitTextFillColor:"transparent"
},

tabs:{
marginBottom:"40px"
},

button:{
margin:"10px",
padding:"12px 25px",
background:"rgba(255,255,255,0.05)",
border:"1px solid rgba(56,189,248,0.3)",
borderRadius:"10px",
cursor:"pointer",
color:"white",
fontWeight:"bold",
backdropFilter:"blur(10px)",
transition:"0.3s",
boxShadow:"0 0 8px rgba(56,189,248,0.4)"
},

timeline:{
position:"relative",
maxWidth:"900px",
margin:"auto"
},

line:{
position:"absolute",
width:"4px",
background:"linear-gradient(#38bdf8,#3b82f6)",
boxShadow:"0 0 15px #38bdf8",
top:0,
bottom:0,
left:"50%"
},

item:{
padding:"20px",
width:"50%",
position:"relative"
},

card:{
background:"rgba(255,255,255,0.05)",
padding:"20px",
borderRadius:"14px",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
backdropFilter:"blur(12px)",
border:"1px solid rgba(255,255,255,0.1)",
transition:"all 0.35s ease"
},

cardHover:{
transform:"translateY(-8px) scale(1.03)",
boxShadow:"0 0 20px #38bdf8"
},

xp:{
background:"#3b82f6",
padding:"6px 12px",
borderRadius:"6px",
fontSize:"12px",
fontWeight:"bold",
boxShadow:"0 0 12px #38bdf8"
}

};

return(

<div style={styles.page}>

<h1 style={styles.title}>Your Coding Quest Path</h1>

<div style={styles.tabs}>

<button style={styles.button} onClick={()=>setActive("html")}>HTML</button>
<button style={styles.button} onClick={()=>setActive("css")}>CSS</button>
<button style={styles.button} onClick={()=>setActive("javascript")}>JavaScript</button>
<button style={styles.button} onClick={()=>setActive("python")}>Python</button>

</div>

<div style={styles.timeline}>

<div style={styles.line}></div>

{roadmaps[active].map((item,index)=>{

const sideStyle={
left:item.side==="right"?"50%":"0",
textAlign:item.side==="left"?"right":"left"
};

return(

<div key={index} style={{...styles.item,...sideStyle}}>

<div
style={{
...styles.card,
...(hover===index?styles.cardHover:{})
}}
onMouseEnter={()=>setHover(index)}
onMouseLeave={()=>setHover(null)}
>

<h3>{item.title}</h3>
<span style={styles.xp}>{item.xp}</span>

</div>

</div>

);

})}

</div>

</div>

);

}

export default Roadmap;