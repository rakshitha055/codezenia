// src/api.js
import axios from "axios";

const API_URL = "http://localhost:5000"; // Flask backend base URL

// Auth APIs
export const registerUser = (data) => axios.post(`${API_URL}/auth/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);

// StoryQuest APIs
export const getStoryQuests = () => axios.get(`${API_URL}/api/storyquests`);
export const completeQuest = (questId, userId) =>
  axios.post(`${API_URL}/api/storyquests/${questId}/complete`, { user_id: userId });