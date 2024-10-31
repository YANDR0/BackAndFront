import { Router } from "express";
import usersRoutes from './users';
import signupRoutes from './signup';

const router = Router();

/**
 * @swagger
 * /:
 *  get:
 *   tags: [Home]
 *   description: home endpoint
 *   responses: 
 *    200:
 *     description: api successful yei
 */
router.get('', (req, res) => {
    res.send('Api works!');
})

/**
 * @swagger
 * /users:
 *  get:
 *   tags: [Users]
 *   description: users endpoint
 *   responses: 
 *    200:
 *     description: array of users
 */
router.use('/users', usersRoutes);
router.use('/signup', signupRoutes);

export default router;