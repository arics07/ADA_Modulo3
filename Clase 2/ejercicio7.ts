/*
Ejercicio 7: Función que modifica propiedades de un objeto
Consigna: Crea una función llamada aumentarSalario que acepte un objeto
empleado con las propiedades nombre (string) y salario (number), y un número
que represente el porcentaje de aumento. La función debe aumentar el salario
del empleado y devolver el nuevo salario. Muestra en la consola el resultado
*/

type Empleado = {
    nombre: string,
    salario: number,
    porcentajeAumento: number
};

let empleado1 = {
    nombre: 'Luis',
    salario: 100000,
    porcentajeAumento: 50
};

let aumentarSalario = (empleado: Empleado): number => {
    empleado.salario = empleado.salario*(1+empleado.porcentajeAumento/100);
    return empleado.salario
}

console.log(aumentarSalario(empleado1));
