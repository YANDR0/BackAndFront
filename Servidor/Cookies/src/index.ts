import express, { json } from "express";
import routes from './routes';

const port = process.env.PORT || 3000;
const app = express();

app.use(routes);

app.listen(port, () => {
    console.log(`Puerto ${port}`)
})
