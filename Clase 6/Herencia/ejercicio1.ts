/*
Ejercicio 1: Herencia Simple Consigna: Define una clase base Torta que tenga propiedades generales 
como nombre y tipo, y un método hacerDescripcion() que devuelva una descripción general de la torta. 
Luego, crea una clase derivada TortaDeChocolate que extienda de Torta y sobrescriba el método 
hacerDescripcion() para que devuelva "Soy una torta de chocolate, deliciosa y suave."
*/

class Torta {
    public nombre: string;
    public tipo: string;

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo
    };

    hacerDescripcion(): void {
        console.log(`Nombre de la torta: ${this.nombre}\nTipo: ${this.tipo}`); 
    }

};


class TortaDeChocolate extends Torta {

    constructor(nombre: string) {
        super(nombre, 'Chocolate');
    }
    hacerDescripcion(): void {
        console.log("Soy una torta de chocolate, deliciosa y suave."); 
    }

};


const unaTorta = new Torta('Lemon Pie', 'helada');
unaTorta.hacerDescripcion();

console.log('----------------------------------');


const unaTortaDeChocolate = new TortaDeChocolate('Selva Negra');
unaTortaDeChocolate.hacerDescripcion();