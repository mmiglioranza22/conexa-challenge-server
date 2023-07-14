import express, { Express, Request, Response } from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import router from './router'
import morgan from 'morgan'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

const corsOptions = {
  origin: 'https://conexa-challenge-omega.vercel.app/'
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(morgan('tiny'))
app.use('/', router)

app.listen(port, () => {
  console.log(`[server]: Server is running at PORT:${port}`);
});