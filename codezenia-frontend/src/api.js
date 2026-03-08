// src/api.js
import axios from "axios";

// Axios instance
const API = axios.create({
  baseURL: "http://localhost:5000", // Flask backend URL
});

// API methods
const api = {

  // Auth APIs
  registerUser: (data) => API.post("/auth/register", data),

  loginUser: (data) => API.post("/auth/login", data),

  // StoryQuest APIs
  getStoryQuests: () => API.get("/api/storyquests"),

  completeQuest: (questId, userId) =>
    API.post(`/api/storyquests/${questId}/complete`, {
      user_id: userId,
    }),

  // Leaderboard API
  getLeaderboard: () => API.get("/leaderboard"),

};

export default api;