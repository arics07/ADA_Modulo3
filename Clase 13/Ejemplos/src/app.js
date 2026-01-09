//importo el módulo express: framework que nos permite crear un servidor web y manejar las solicitudes
import express from 'express';

import userRouter from './routes/userRoutes.js';


//creo una instancia de express
const app = express();

// === Middleware para parsear JSON ===
app.use(express.json());

//asocio las rutas al prefijo users
app.use('/users', userRouter);


//exporto la aplicación
export default app;