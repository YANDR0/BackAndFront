import { Router } from "express";

const router = Router();


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
router.get('', (req, res) => {
    res.send([]);
})

/**
 * @swagger
 * /users/{id}:
 *  get:
 *   tags: [Users]
 *   description: get user by id
 *   parameters:
 *    - in: path
 *      name: id
 *      description: id of user
 *      required: true 
 *      schema:
 *       type: number
 *   responses: 
 *    200:
 *     description: detail of user
 */
router.get('/:id', (req, res) => {
    res.send({
        id: req.params.id
    })
})

export default router;