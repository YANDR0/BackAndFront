import express from "express";
import { config } from "dotenv";
config();
import routes from './routes';
import path from "path";


const port = process.env.PORT || 3000;
const app = express();

app.use('/assets', express.static(path.join(__dirname, '..', 'public')));
app.use(routes);

app.listen(port, () => {
    console.log(`Puerto ${port}`)
})

