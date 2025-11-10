/*
Ejercicio 2: Modifica el valor de una variable
Declara una variable con el tipo any, asigna inicialmente un valor numérico,
luego cambia su valor por una cadena de texto, y finalmente imprime ambos
valores.
*/

let variableCambiante: any = 99;
console.log(`Soy de tipo ${typeof variableCambiante}`);
variableCambiante = "Soy una cadena :)";
console.log(`Y ahora soy de tipo ${typeof variableCambiante}`);

