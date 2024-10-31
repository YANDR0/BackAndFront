import { Router } from "express";
import usersRoutes from './users'


const router = Router();

router.get('', (req, res) => {
    res.send('Api works!');
})

router.use('/users', usersRoutes);

export default router;