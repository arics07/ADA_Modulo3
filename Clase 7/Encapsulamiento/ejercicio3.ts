/*
3. Ejercicio de Estudiante
Diseña una clase Estudiante que contenga propiedades privadas para nombre, edad, 
y calificaciones. Implementa métodos para agregar calificaciones y calcular el promedio. 
Imprime un mensaje en caso de que se intente agregar una calificación inválida 
(fuera del rango 0-100) o si no hay calificaciones para calcular el promedio.
*/

class Estudiante {
    private _nombre: string;
    private _edad: number;
    private _calificaciones: number[];

    constructor(nombre: string, edad: number) {
        this._nombre = nombre;
        this._edad = edad;
        this._calificaciones = [];
    };

    public ingresarNota(nota: number) {
        if ((nota>0) && (nota<=10)) {
            this._calificaciones.push(nota);
        } else {
            console.log('ERROR!! La nota debe ser un valor numérico del 1 al 10.');
        };
    };

    public calcularPromedio() {
        if (this._calificaciones.length>0) {
            const suma = this._calificaciones.reduce((acumulador, calificacionActual) => acumulador + calificacionActual, 0);
            console.log(`El promedio de ${this._nombre} es: ${suma / this._calificaciones.length}`);
            
        } else {
            console.log('No se ha ingresado ninguna nota para este alumno');
        };
    };

};


const pepe = new Estudiante('Pepe', 14);
pepe.calcularPromedio();

pepe.ingresarNota(10);
pepe.ingresarNota(7);
pepe.ingresarNota(9);
pepe.calcularPromedio();
