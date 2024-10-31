import express from "express";
import routes from './routes';
import swaggerJSDoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import swaggerConfig from "./../swagger.config.json"

const port = process.env.PORT || 3000;
const app = express();

app.use(routes); 

const swaggerDocs = swaggerJSDoc(swaggerConfig);
app.use('/swagger', serve, setup(swaggerDocs))

app.listen(port, () => {
    console.log(`Puerto ${port}`)
})
