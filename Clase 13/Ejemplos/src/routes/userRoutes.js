import { Router } from "express"; //Router es nativo de JS

//Creo una instancia de Router
const userRouter = Router();

//Defino las rutas básicas de lo que sería el recurso 'usuarios'

//GET '/' => obtener todos los usuarios
userRouter.get('/', (req, res) => {
    res.json({ message: 'Obteniendo todos los usuarios...'});
});

//POST '/' => para agregar un nuevo usuario
userRouter.post('/', (req, res) => {
    const { name, email } = req.body;
    //201 => se creo con éxito
    res.status(201).json({ message: 'Usuario creado con éxito: ', user: { name, email}});
});

//GET '/:id' => para obtener un usuario por ID
userRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message : 'Usuario obtenido con ID: ', id});
});

//PUT '/:id' => para actualizar usuario por id
userRouter.put('/:id', (req, res) => {
    const { id } = req.params; //para tomar el dato que viene del parámetro dinámico
    const { name, email } = req.body; //para tomar los datos que ingresa el usuario
    res.json({ message: `Usuario con ID: ${id} actualizado con éxito! `, user: {name, email }}); //rta en formao json
});

//DELETE '/:id' => para eliminar un usuario por id
userRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Usuario con ID: ${id} eliminado con éxito.`});
});



export default userRouter;
