/*
Ejercicio 2: Herencia Simple con Acceso
Consigna: Crea una clase base Maestro con propiedades protegidas nombre y materia, 
y un método enseñar(). Luego, crea una clase derivada MaestroMatematicas que extienda 
de Maestro y sobrescriba el método enseñar() para imprimir un mensaje específico de matemáticas.
*/

class Maestro {
    protected nombre: string;
    protected materia: string;

    constructor(nombre: string, materia: string) {
        this.nombre = nombre;
        this.materia = materia
    };

    enseniar(): void {
        console.log('Enseñando...');
    };

};

class MestroMatematica extends Maestro {

    constructor(nombre: string) {
        super(nombre, 'Matematica')
    }
    enseniar(): void {
        console.log(`Soy el profe ${this.nombre} de ${this.materia}`);
        console.log('Enseñando matemática...');
    };
};

const profeMatematica = new MestroMatematica('Mario');
profeMatematica.enseniar();