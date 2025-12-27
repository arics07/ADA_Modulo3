/*
Ejercicio 3: Creación y manipulación de objetos
Consigna: Crea un objeto llamado deportista que tenga las propiedades nombre
(string), deporte (string), y energia (number). Luego, define una función entrenar
que acepte el objeto deportista y un número de horas de entrenamiento,
disminuyendo la energía del deportista en 5 por cada hora de entrenamiento. Al
final, muestra el estado del deportista en la consola.
*/

type Deportista = {
    nombre: string,
    deporte: string,
    energia: number
}

let max: Deportista = {
    nombre: "Max Verstappen",
    deporte: "Formula 1",
    energia: 100
}

function entrenar(deportista: Deportista, horasEntrenamiento: number): void {
    if (deportista.energia - 5* horasEntrenamiento > 0) {
        deportista.energia = deportista.energia - 5* horasEntrenamiento;
    } else {
        deportista.energia = 0
    }
}

entrenar(max, 10);
console.log(max.energia);

entrenar(max, 2);
console.log(max.energia);

entrenar(max, 20);
console.log(max.energia);
