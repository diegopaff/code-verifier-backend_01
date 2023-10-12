import express, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";

// Router from express
// Especify the root of the route
let helloRouter = express.Router();

//http://localhost:8000/api/hello/
helloRouter.route('/')
    // GET -> http://localhost:8000/api/hello/
    .get(async (req: Request, res: Response) => {
        // Obtain a query param
        let name: any = req?.query?.name;
        LogInfo(`Query Param ${name}`) // using utils logger.ts created previusly

        // COntroller Instance to execute method
        const controller: HelloController = new HelloController();
        // Obtain Response
        const response = await controller.getMessage(name);
        // Send to the client the response

        return res.send(response);
    })

// Export HelloRouter
export default helloRouter;