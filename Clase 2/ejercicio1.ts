/*
Ejercicio 1: Declarar y usar funciones con tipos
Consigna: Crea una función llamada multiplicarNumeros que acepte dos
parámetros, ambos de tipo number, y retorne el producto de ambos números.
Luego, muestra el resultado en consola llamando a la función.
*/

let multiplicarNumeros = (num1: number, num2: number): number => {
    return num1*num2
}

let num1 = 7;
let num2 = 8;

console.log(`El resultado de multiplicar ${num1} y ${num2} es ${multiplicarNumeros(num1, num2)}`);
