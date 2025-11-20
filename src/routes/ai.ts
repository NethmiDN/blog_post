import { Router } from "express";
import { authenticate } from "../middleware/auth";
import { requireRole } from "../middleware/role";
import { Role } from "../models/user.model";
import { generateContent } from "../controllers/ai.controller";

const router = Router()

router.post("/generate", 
    authenticate, 
    requireRole([Role.ADMIN,Role.AUTHOR,Role.USER]),
    generateContent
)


export default router;