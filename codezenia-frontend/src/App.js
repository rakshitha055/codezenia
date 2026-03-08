import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StoryQuest from "./pages/games/storyquest/StoryQuest";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import DebugArena from "./pages/games/DebugArena/DebugArena";
import PuzzleMode from "./pages/games/PuzzleMode/PuzzleMode";
import BattleLobby from "./pages/games/BattleLobby/BattleLobby";
import Roadmap from "./pages/Roadmap";
import Profile from "./pages/Profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/games/storyquest" element={<StoryQuest />} />
         <Route path="/leaderboard" element={<Leaderboard />} />
         <Route path="/games/debuggingarena" element={<DebugArena />} />
         <Route path="/games/puzzlemode" element={<PuzzleMode />} />
         <Route path="/games/battlelobby" element={<BattleLobby />} />
         <Route path="/roadmap" element={<Roadmap />} />
         <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
