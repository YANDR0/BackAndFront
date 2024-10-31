import { json, Router } from "express";
import loginRoutes from './login'
import authRoutes from './auth'
import cookieParser from 'cookie-parser';

const router = Router();
router.use(json());
router.use(cookieParser(process.env.SECRETKEY));

router.get('', (req, res) => {
    res.send('Api works!');
})

router.use('/login', loginRoutes);
router.use('/auth', authRoutes)

export default router;