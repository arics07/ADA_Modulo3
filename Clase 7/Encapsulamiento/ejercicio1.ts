/*
1. Ejercicio de Coche
Diseña una clase Coche que represente un vehículo. 
Esta clase debe tener propiedades privadas para marca, modelo, año, y kilometraje. 
Implementa métodos para encender el coche y realizar un viaje, que incrementen el kilometraje. 
Asegúrate de que el año no sea menor que 1886 (el año en que se inventó el coche) y que el 
kilometraje no pueda ser negativo. Si se intenta establecer un año o kilometraje no válido, 
imprime un mensaje indicando el error.
*/

class Coche {

    private _marca: string;
    private _modelo: string;
    private _anio: number;
    private _kilometraje: number;

    constructor(marca: string, modelo: string) {
        this._marca = marca;
        this._modelo = modelo;
        this._anio = 0;
        this._kilometraje = 0;
    };

    public set anio(value: number) {
        if (value >= 1886) {
            this._anio = value
        } else {
            console.log("ERROR!! El año debe ser mayor o igual a 1886.");
        };
    };

    public set kilometraje(value: number) {
        if (value >= 0) {
            this._kilometraje = value;
        } else {
            console.log("ERROR!! El kilometraje no puede ser negativo.");
        };
    };

    public get marca(): string {
        return this._marca;
    };

    public get modelo(): string {
        return this._modelo;
    };
    
    public get anio(): number {
        return this._anio;        
    };

    public get kilometraje(): number {
        return this._kilometraje;
    };

};


const auto = new Coche('Ford', 'Focus');
auto.anio = 2020;
auto.kilometraje = 100;
console.log(`Auto ${auto.marca} ${auto.modelo}, del año ${auto.anio} con un kilometraje de ${auto.kilometraje}`);


auto.anio = 1779;

auto.kilometraje = -100;



