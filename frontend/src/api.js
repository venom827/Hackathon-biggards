import axios from "axios";

const API = axios.create({
  baseURL: "/api", // relative path to backend
});

export default API;
