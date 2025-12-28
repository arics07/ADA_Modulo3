/*
Actividad 5: Re-exportación de Módulos
Crea un módulo index.ts que re-exporte todas las funciones y constantes de los
módulos mathUtils.ts y stringUtils.ts.
En main.ts, importa todo desde index.ts y utiliza al menos una función de cada
módulo, mostrando el resultado en la consola.
*/

import {
    add,
    substract,
    capitalize,
    reverse
} from './index'

console.log(`La suma entre 6 y 8 da ${add(6,8)}`);

console.log(`Yo amo a mi michi || ${reverse('Yo amo a mi michi')}`);

