/* 1. Mueblería: Actualización de Precios
En una mueblería, se requiere un sistema que permita actualizar los precios de
los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y
un identificador único. Implementa las siguientes funciones:
• Añadir un nuevo mueble.
• Actualizar el precio de un mueble después de 3 segundos utilizando setTimeout().
• Mostrar el inventario de muebles.*/

//Definimos una tupla para el mueble
type Mueble = [number, string, number];  //id, nombre, precio

//Definimos el inventario de muebles
let inventario: Mueble[] = []; //lo inicializo vacío

//1. función para añadir un nuevo mueble
function agregarMueble(id: number, nombre: string, precio: number) {
    const nuevoMueble: Mueble = [id, nombre, precio];
    inventario.push(nuevoMueble);
    console.log(`Mueble ${id} se agregó correctamente`);
};

//2. función para mostrar el inventario
function mostrarInventario() {
    console.log('Inventario de la mueblería: ');
    inventario.forEach(mueble => {
        const [id, nombre, precio] = mueble;
        console.log(`ID: ${id}, Nombre: ${nombre}, Precio: ${precio}`);       
    });
};

//3. función para actualizar el precio de un mueble
function actualizarPrecio(id: number, nuevoPrecio: number) {
    //operación asíncrona que espera 3 segs para eejecutarse
    setTimeout(() => {
        //buscar el mueble
        const mueble = inventario.find(m => m[0] === id); //mueble[0] corresponde al id del mueble actual

        //actualizar el precio
        if (mueble) {
            mueble[2] = nuevoPrecio; //actualiza el precio; la posicion 2 de la tupla corresponde al precio
            console.log('El precio del mueble se ha actualizado!');
        } else {
            console.log('El mueble NO fue encontrado.');          
        };
    }, 3000);
};



agregarMueble(1900, 'Mesa Mórdica', 78000);
agregarMueble(2352, 'Escritorio', 89000);
agregarMueble(4256, 'Sillon 3 cuerpos', 234000);

mostrarInventario();

actualizarPrecio(1900, 84000);


