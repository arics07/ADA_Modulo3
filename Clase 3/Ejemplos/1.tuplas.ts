//Declaración de tupla
let persona : [string, number];

//Inicialización de la tupla
persona = ['Ana', 25]

//Accedemos a los elementos de la tupla
console.log('Nombre: ', persona[0]);
console.log('Edad: ', persona[1]);
console.log(persona);

//Modificamos la tupla
persona[1] = 26;
console.log('Nueva edad: ', persona[1]);

//Desestructurar la tupla
let [nombre, edad] = persona;
console.log('La persona se llama ', nombre, ' y tiene ', edad, ' años.');
//entonces ya no necesito llamarlos por su posición