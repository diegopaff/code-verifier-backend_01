
## controller
Los controller se crean para todas las subrutas que necesitan una API

**Interface** -> define que aspecto va a tener el controller
**Types** -> van a ser los tipos de respuestas o datos que vamos a utilizar
**Archivos Controller** -> van a ser los encargados de devolver la información que es gestionada por las rutas.





## Routes
En la carpeta routes creamos los endpoings para escuchar los querys

```ts
import express, { Request, Response } from "express"; // importo express y los tipos Request y Respones para ts
import { HelloController } from "@/controller/HelloController"; // importo el controlador que se encarga de devolver la info que obtengo por aqui(routes)

// Router from express
// Especify the root of the route
let helloRouter = express.Router();

// GET -> http://localhost:8000/api/hello/
helloRouter.route('/')
    .get(async (req: Request, res: Response) => {
        // Obtain a query param
        let name: string = req?.query?.name; // query es la forma de acceder al parametro de la url
    })
```

## Server
