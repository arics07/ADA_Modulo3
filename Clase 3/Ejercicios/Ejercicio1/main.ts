/*
Actividad 1: Modularización Básica
Crea un módulo llamado mathUtils.ts que contenga las siguientes funciones:
• add(a: number, b: number): number: devuelve la suma de a y b.
• subtract(a: number, b: number): number: devuelve la resta de a y b.
Luego, crea un archivo main.ts que importe mathUtils y utilice ambas funciones
para mostrar el resultado en la consola.
*/

import {add, substract} from './mathUtils'

console.log(add(43, 63));
console.log(substract(100, 98));

