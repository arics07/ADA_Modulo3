import app from "./app.js";

const PORT = 3000;

//inicio el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});