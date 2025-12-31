/*
Ejercicio 2: Polimorfismo con Sobreescritura de Métodos (Tiempo de Ejecución)
Crea una jerarquía de clases de Vehiculo con dos clases derivadas: Coche y Moto. 
Cada clase debe sobrescribir el método arrancar de la clase base para proporcionar 
una implementación específica de cómo arrancar.
*/

class Vehiculo {

    arrancar() {
        console.log('El vehículo ha arrancado!');
    };

};


class Coche extends Vehiculo {

    arrancar() {
        console.log('El coche ha arrancado!');
    };

};


class Moto extends Vehiculo {

    arrancar() {
        console.log('La moto ha arrancado!');
    };

};



const vehiculo = new Vehiculo();
vehiculo.arrancar();

const coche = new Coche();
coche.arrancar();

const moto = new Moto();
moto.arrancar();