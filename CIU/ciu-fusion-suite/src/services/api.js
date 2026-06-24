// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.customs.gov.ng",
});

axios.post("https://ciu-api/api/intelligence", {
  title: "Suspicious Cargo",
  description: "High risk container detected",
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;