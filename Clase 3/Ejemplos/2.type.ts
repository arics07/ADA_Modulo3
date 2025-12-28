//1. Alias de tipos primitivos
//Alias para tipos básicos o primitivos (como number, string o boolean)
type ID = number; //Alias para números (el ID va a representar un número)
type nombre = string; //Alias para cadenas (nombre va a representar un string)
type activo = boolean; //Alias para boolean (activo representa un booleano)

//Usos para alias
let usuarioID: ID = 123; //una variable de tipo ID (number)
let nombreUsuario: nombre = 'Lucia' //una varuable de tipo nombre (string)
let cuentaActiva: activo = true //una variable de tipo activo (boolean)

console.log('Usuario ID', usuarioID);
console.log('Nombre ', nombreUsuario);
console.log('Cuenta activa ', cuentaActiva);

//2. Alias para los objetos
type Direccion = {
    calle: string,
    ciudad: string,
    codigoPostal: number
}

//Uso del alias "Direccion" para crear un objeto

let miDireccion: Direccion = {
    calle: "Corrientes",
    ciudad: "Buenos Aires",
    codigoPostal: 1428
};

console.log(`Vivo en: calle ${miDireccion.calle}, ${miDireccion.ciudad}, ${miDireccion.codigoPostal}`);


//3. Alias para uniones de tipos
type Resultado = 'exito' | 'error';
type IDusuario = string | number;

//Usamos el alias resultado e IDusuario
let estadoDeOperacion: Resultado = 'exito';
let IDusuario1: IDusuario = 4567;
let IDusuario2: IDusuario = 'hola123';

console.log(`Estado de la operación: ${estadoDeOperacion}, ID 1: ${IDusuario1}, ID 2: ${IDusuario2}`);


//4. Alias para funciones
type OperacionMatematica = (a: number, b: number) => number;

//Implementacion de funciones que siguen el formato OperacionMatematica
const sumar: OperacionMatematica = (a, b) => a + b;
const restar: OperacionMatematica = (a, b) => a - b;

console.log(sumar(3,7));
console.log(restar(17, 4));
console.log(typeof(sumar(1,6))); //recibe como parametros dos number y devuelve un number

//5. Alias para los arrays
type ListaDeNumeros = number[];
type ListaDeCadenas = string[];

let numeros: ListaDeNumeros = [1, 2, 3, 4, 5, 6, 7];
let cadenas: ListaDeCadenas = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete'];

console.log(`Numeros: ${numeros.join(', ')}`);
console.log(`Cadenas: ${cadenas.join(', ')}`);

