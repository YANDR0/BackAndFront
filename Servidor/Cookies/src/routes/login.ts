import { Router } from "express";


const router = Router();

const validUsers = [
    {
        name: 'Juan',
        email: 'juan.pedro@gmail.com',
        password: '123456'
    },
    {
        name: 'Maria',
        email: 'maria.angeles@gmail.com',
        password: 'qwerty'
    }
];

router.get('', (req, res) => {
    res.send('Login');
}); 

router.post('', (req, res) => {
    const {email, password} = req.body;
    const user = validUsers.find((item) => {
        return item.email === email, item.password == password;
    });

    if(!user){
        res.sendStatus(400);
    } else {
        res.cookie('auth', JSON.stringify(user), {signed: true});
        res.send({});
    }
    
});

export default router;