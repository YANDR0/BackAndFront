import express, { response } from "express";
const path = require('path')
import axios from "axios"
const handlebars = require("express-handlebars")

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');


app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('', (req, res) => {
    const url = path.join(__dirname, 'views', 'index.html')
    res.sendFile(url)
})

app.get('/usuarios', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        const users = response.data;
        res.render('users', {users});
    }).catch(e => {
        res.send(404)
    })
})

app.listen(port, () => {
    console.log(`Puerto ${port}`)
})
