//definimos un enum numerico
enum colores {
    Rojo, //0
    Verde, //1
    Azul //2
}

//Accedemos a los valores del enum
let colorFavoritos: colores = colores.Verde
console.log(colorFavoritos);
console.log('Nombre del color favorito: ', colores[1]);


enum equipos {
    Estudiantes, //0
    River = 200, //200
    Talleres //201
}

console.log(equipos[0]);
console.log(equipos[1]); //undefined, porque ninguno vale 1
console.log(equipos[200]);
console.log(equipos[201]);


//definimos un enum con string
enum Direcciones {
    Norte = 'N',
    Sur = 'S',
    Este = 'E',
    Oeste = 'O'
}

//asignarle el valor de enum a una variable
let direccionDeViaje: Direcciones = Direcciones.Norte;
console.log(`Dirección del viaje: ${direccionDeViaje}`);

console.log(Direcciones.Sur);
console.log(Direcciones['Este']);

