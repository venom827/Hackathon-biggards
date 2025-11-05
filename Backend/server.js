import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import donorRoutes from "./routes/donorRoutes.js";
import hospitalRoutes from "./routes/hospitalRoutes.js";

dotenv.config();
connectDB();

const app = express();

// JSON parsing middleware
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: "https://hackathon-biggards-production.up.railway.app", // your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // only needed if using cookies
};

app.use(cors(corsOptions));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/donor", donorRoutes);
app.use("/api/hospital", hospitalRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || "Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
