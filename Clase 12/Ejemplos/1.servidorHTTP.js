//importo el módulo http de node.js, que nos va a permitir crear un servidor http
const { log } = require('console');
const http = require('http');

//Cremaos un servidor usando el método 'createServer'
//Esta función toma como callback dos parametros
//'req' (request): representa la solicitud que hace el cliente
//'res' (response): representa la respuesta que envía el servidor al cliente
//req: request // res: response
const server = http.createServer((req, res) => {
    //Establecemos el cod. de estado de la respuesta a 200 (OK), indicando que la solicitud fue existosa
    res.statusCode = 200;

    //Cinfiguramos el encabezado 'Content-Type' para que el cliente sepa que el contenido es texto plano
    res.setHeader('Content-Type', 'text/plain');

    //Enviar la respuesta al cliente con el mensaje y finaliza la respuesta (.end)
    res.end('Hola Mundo!');
});

//Hacemos que el servidor escuche en el puerto 3000
//Una vez que el servidor está listo, imprime el mensaje en consola
server.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});

