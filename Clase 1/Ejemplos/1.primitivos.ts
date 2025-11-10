//Ejemplos de tipos de datos primitivos en TS

//1. STRING
let nombre: string = "Leon";
let saludo: string = `Hola ${nombre}! Bienvenido a TypeScript`;
console.log(saludo);
console.log("\n --------------------------- \n");

//2.NUMBER (números enteros, decimales, notación científica)
let numeroEntero: number = 39;
let numeroDecimal: number = 3.14;
let numeroNotacionCientifica: number = 1e5;

console.log(numeroEntero);
console.log(numeroDecimal);
console.log(numeroNotacionCientifica);
console.log("\n --------------------------- \n");

//3.BOOLEAN valores lógicos (true, false)
let esEstudiante: boolean = true;
let tieneLicenciaDeConducir: boolean = false;

console.log(esEstudiante);
console.log(tieneLicenciaDeConducir);
console.log("\n --------------------------- \n");

//4. Null (ausencia intencional de un valor)
let valorNulo: null = null;
console.log(valorNulo);
console.log("\n --------------------------- \n");

//5. undefined (valor no inicializado)
let valorIndefinido: undefined = undefined;
console.log(valorIndefinido);
console.log("\n --------------------------- \n");

//6. SYMBOL (símbolos únicos)
let id1: symbol = Symbol('id');
let id2: symbol = Symbol('id');
console.log(`Son símbolos iguales? ` , id1 === id2);

//tsc -w