import express from "express";
import { getActiveRequests, acceptRequest } from "../controllers/donorController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/requests", protect, getActiveRequests);
router.post("/requests/:id/accept", protect, acceptRequest);

export default router;
