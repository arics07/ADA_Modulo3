//importo el módulo express
const express = require('express');

//creo una instancia de express
const app = express();

//Definimos un puerto para el servidor
const PORT = 3000;

//Ruta GET para URL raíz
app.get('/', (req, res) => {
    res.send('Hola a todos!! Bienvenidos al servidor con Express.js')
});

//Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);    
});

