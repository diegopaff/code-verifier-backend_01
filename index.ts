// Enviroment Variables
import dotenv from 'dotenv';
import server from './src/server';
import { LogError, LogSucces } from './src/utils/logger';


// * Configuration the .env file
dotenv.config();

const port = process.env.PORT || 8000;

// * Execute SERVER

server.listen(port, ()=> {
  LogSucces(`[SERVER ON]: Running in http://localhost:${port}/api`);
});

server.on('error', (error) => {
  LogError(`[SERVER ERROR]: ${error}`);
});