import express from "express";
import { createRequest, getHospitalRequests } from "../controllers/hospitalController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/requests", protect, createRequest);
router.get("/requests", protect, getHospitalRequests);

export default router;
