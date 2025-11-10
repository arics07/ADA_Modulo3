"use strict";
//Ejemplos de tipos de datos primitivos en TS
Object.defineProperty(exports, "__esModule", { value: true });
//1. STRING
let nombre = "Leon";
let saludo = `Hola ${nombre}! Bienvenido a TypeScript`;
console.log(saludo);
console.log("\n --------------------------- \n");
//2.NUMBER (números enteros, decimales, notación científica)
let numeroEntero = 39;
let numeroDecimal = 3.14;
let numeroNotacionCientifica = 1e5;
console.log(numeroEntero);
console.log(numeroDecimal);
console.log(numeroNotacionCientifica);
console.log("\n --------------------------- \n");
//3.BOOLEAN valores lógicos (true, false)
let esEstudiante = true;
let tieneLicenciaDeConducir = false;
console.log(esEstudiante);
console.log(tieneLicenciaDeConducir);
console.log("\n --------------------------- \n");
//4. Null (ausencia intencional de un valor)
let valorNulo = null;
console.log(valorNulo);
console.log("\n --------------------------- \n");
//5. undefined (valor no inicializado)
let valorIndefinido = undefined;
console.log(valorIndefinido);
console.log("\n --------------------------- \n");
//6. SYMBOL (símbolos únicos)
let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(`Son símbolos iguales? `, id1 === id2);
//# sourceMappingURL=1.primitivos.js.map