//Interfaz para vehículos eléctricos
interface Electrico {
    cargarBateria(): void;
};


//Clase Abstracta para definir todos los vehículos
abstract class Vehiculo {
    constructor(protected tipo: string) {};

    abstract moverse(): void;

    describir(): void {
        console.log(`Este es un vehículo de tipo ${this.tipo}`);
    }
};

//Creo una clase que extiende la clase abstracta e implementa la interface
class AutoElectrico extends Vehiculo implements Electrico {
    constructor() {
        super("Auto Eléctrico");
    };

    //tengo que declarar el método abstracto moverse()
    moverse(): void {
        console.log('El auto eléctrico está en movimiento...');      
    };

    cargarBateria(): void {
        console.log('Cargando la batería del auto...');
    };

};

const tesla = new AutoElectrico();
tesla.describir();
tesla.cargarBateria();
tesla.moverse();