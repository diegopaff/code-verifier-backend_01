# Estudio de stack MERN 

Creación de proyecto

1- Instalamos npm en la carpeta

```
npm init
```

2- Instalamos paquetes express y dotenv
**Express:** crear una aplicacion de backend con node
**dotenv:**  crea un archivo de entorno .env al que le podemos hacer consultas y con información privada.

```
npm i express dotenv
```

3- Creamos index.js
```js
const express = require('express'); //<- import express
const dotenv = require('dotenv'); // <- import dotenv

// Configuration the .env file
dotenv.config();  

// Create Express APP
const app = express(); 
const port = process.env.PORT || 8000;

// Define the first Route of APP
app.get('/', (request, response) => { //<- in the route '/' expect a request and respond a response
    //Send hello world
    response.send('APP Restful: Express + Swagger + Mongoose')
});

//Execute APP and Listen Request to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
});

```

4- instalamos nodemon para que escuche y ejecute cualquier cambio
Utilizando el '-D' se guardan como dependencias de desarrollo en el package.json (devDependencies)
Solo se ejecutan en el entorno de desarrollo y no en produccion.

```
npm install -D nodemon 
```

5- Instalamos typescript (tambien dependencia de desarrolo)
```
npm install -D typescript @types/express @types/node
```