/*
Ejercicio 1: Polimorfismo con Sobrecarga de Funciones (Tiempo de Compilación)
Implementa una clase Calculadora que tenga un método sumar. El método debe estar 
sobrecargado para permitir la suma de:
• Dos números enteros.
• Tres números enteros.
• Dos cadenas, concatenando las dos cadenas.
*/

class Calculadora {

    // Sobrecarga del método sumar

    sumar(a: number, b: number): number;

    sumar(a: number, b: number, c: number): number;

    sumar(a: string, b: string): string;

    public sumar(a: number | string, b: number | string, c?: number): number | string | null {
        // Si entran todos números
        if (typeof a === "number" && typeof b === "number") {
            if (c !== undefined) {
                return a + b + c; // Suma de tres números
            }
            return a + b; // Suma de dos números
        }

        // Si entran cadenas
        if (typeof a === "string" && typeof b === "string") {
            return a + b; 
        }

        // Si los tipos no coinciden, devolvemos null
        return null;
    };
    
}