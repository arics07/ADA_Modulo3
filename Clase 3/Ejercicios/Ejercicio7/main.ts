/*
Actividad 7: Cálculo de Áreas
Crea un módulo shapes.ts que contenga las siguientes funciones:
• circleArea(radius: number): number: devuelve el área de un círculo.
• squareArea(side: number): number: devuelve el área de un cuadrado.
Exporta ambas funciones como exportaciones nombradas. En main.ts, importa
las funciones y úsalas para calcular y mostrar las áreas en la consola.
*/

import {circleArea, squareArea} from './shapes'

console.log(`El área de un círculo de radio 5 es ${circleArea(5)}`);
console.log(`El área de un cuadrado de lado 4 es ${squareArea(4)}`);
