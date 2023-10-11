import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

// Configuration the .env file
dotenv.config()

// Create Express APP
const app: Express = express()
const port: string | number = process.env.PORT || 8000

// Define the first Route of APP
app.get('/', (req: Request, res: Response) => {
  // Send hello world
  res.send('APP Restful: Express + Swagger + Mongoose')
})

// Define a second route
app.get('/hello', (req: Request, res: Response) => {
  // Send hello world
  res.send('Welcome to GET Route: Hello')
})

// Execute APP and Liste Request to PORT
app.listen(port, () => {
  console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})
