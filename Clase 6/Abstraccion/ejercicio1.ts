/*
Ejercicio 1: Abstracción Básica - Ejemplo del Mundo Real
Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método preparar(). 
Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción para que ambas bebidas 
oculten su lógica de preparación interna pero expongan un comportamiento común.
*/

import { ListFormat } from "typescript";

interface Bebida {
    preparar(): void;
};


class Cafe implements Bebida{
    
    public preparar(): void {
        this.calentarAgua();
        this.molerGranos();
        this.mezclar();
        console.log('Café listo!');
    };

    private calentarAgua(): void {
        console.log('Calentando el agua...'); 
    };

    private molerGranos(): void {
        console.log('Moliendo granos de café...');
    };

    private mezclar(): void {
        console.log('Mezclando...');
        
    };

};


class Te implements Bebida{
    
    public preparar(): void {
        this.calentarAgua();
        this.elegirSaquito();
        this.mezclar();
        console.log('Té listo!');
    };

    private calentarAgua(): void {
        console.log('Calentando el agua...'); 
    };

    private elegirSaquito(): void {
        console.log('Eligiendo el saquito de té...');
    };

    private mezclar(): void {
        console.log('Mezclando...');
        
    };

};


const miCafe = new Cafe();
miCafe.preparar();

console.log('-----------------------------------');

const miTe = new Te();
miTe.preparar();

