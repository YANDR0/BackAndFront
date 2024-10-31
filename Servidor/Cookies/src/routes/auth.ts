import { Router } from "express";
import authMiddleware from "../middleware/auth";

const router = Router();



router.get('', authMiddleware, (req, res) => {
    res.send('Auth');
}) 

export default router;