/*
Ejercicio 3: Herencia Múltiple Indirecta (vía Interfaces)
Consigna: Crea dos interfaces: Volador con el método volar() y Transportable 
con el método transportar(). Luego crea una clase Avion que implemente ambas 
interfaces y sobrescriba los métodos.
*/

interface IVolador {

    volar(): void;

};


interface ITransportable {

    transportar(): void;

};


class Avion implements IVolador, ITransportable {
    public modelo: string;

    constructor(modelo: string) {
        this.modelo = modelo;
    };

    volar(): void {
        console.log(`Soy el avión ${this.modelo} y estoy volando!`);
    };

    transportar(): void {
        console.log(`Soy el avión ${this.modelo} y estoy transportando...`);
    };

};
