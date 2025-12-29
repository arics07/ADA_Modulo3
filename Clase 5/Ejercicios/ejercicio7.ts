/*
Ejercicio 7: Integramos contenidos - Animales
1. 
Crea un pequeño sistema de gestión de Animales que incluya las clases Animal, Mascota, y MascotaExotica.
o
La clase Animal debe tener propiedades como nombre y tipo.
o
La clase Mascota debe extender Animal e incluir una propiedad para dueño.
o
La clase MascotaExotica debe extender Animal e incluir una propiedad para habitat.
2.
Implementa métodos para mostrar información sobre cada tipo de animal y agrega ejemplos de instanciación.
*/

class Animal {
    public nombre: string;
    public edad: number;
    public especie: string;

    constructor(nombre: string, edad: number, especie: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
    };

    mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}\nEdad: ${this.edad}\nEspecie: ${this.especie}`);
    };

};

class Mascota extends Animal {
    public duenio: string;

    constructor(nombre: string, edad: number, especie: string, duenio: string) {
        super(nombre, edad, especie);
        this.duenio = duenio;
    };

    mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}\nEdad: ${this.edad}\nEspecie: ${this.especie}\nDueño: ${this.duenio}`);    
    };

};

class MascotaExotica extends Animal {
    public habitat: string;

    constructor(nombre: string, edad: number, especie: string, habitat: string) {
        super(nombre, edad, especie);
        this.habitat = habitat;
    };

    mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}\nEdad: ${this.edad}\nEspecie: ${this.especie}\nHabitat: ${this.habitat}`); 
    };

};

const unAnimal = new Animal('Flora', 7, 'Felino');
unAnimal.mostrarInformacion();
console.log('-------------------------------------------');

const unaMascota = new Mascota('Leon', 3, 'Felino', 'Ari');
unaMascota.mostrarInformacion();
console.log('-------------------------------------------');

const unaMascotaExotica = new MascotaExotica('Menta', 2, 'Iguana', 'Selva tropical');
unaMascotaExotica.mostrarInformacion();