//Importamos todas las funciones desde el index.ts

import {
    circleArea,
    CIRCLE_NAME,
    rectangleArea,
    RECTANGLE_NAME,
    triangleArea,
    TRIANGLE_NAME
} from './index'


const circle = circleArea(5) //le paso el radio
console.log(`${CIRCLE_NAME}: ${circle}`);

const rectangle = rectangleArea(10, 4) //le paso la base y la altura
console.log(`${RECTANGLE_NAME}: ${rectangle}`);

const triangle = triangleArea(9, 5) //le paso la base y la altura --> aca ya va a imprimir el resultado por la función privada que imprimía
console.log(`${TRIANGLE_NAME}: ${triangle}`);