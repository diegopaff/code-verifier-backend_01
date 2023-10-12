import express, { Express, Request, Response} from 'express';

// Enviroment Variables
import dotenv from 'dotenv';

// Security
import cors from 'cors';
import helmet from 'helmet';

// TODO: HTTPS

// Root Router
import rootRouter from '../routes';


// * Configuration the .env file
dotenv.config();

// * Create Express APP
const server: Express = express();

// * Define SERVER to use '/api' and use rootRouter
// From this point onover: http://localhost:8000/api/.....
server.use(
    '/api',
    rootRouter
    )

// TODO: Mongoose Connection

// * Security Config
server.use(helmet());
server.use(cors());

// * Content Type Config
server.use(express.urlencoded({ extended: true, limit:''}));
server.use(express.json({limit: '50mb'}));

// * Redirections Config
// http://localhost:8000/ --> http://localhost:8000/api/
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api');
});

export default server;