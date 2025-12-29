/*
Ejercicio 1: Creación de Objetos y Atributos
1. Define un objeto que represente un libro con las siguientes propiedades:
título, autor, y año de publicación.
2. Crea una instancia de ese objeto y muestra sus propiedades en la consola.
*/

class Libro {
    public nombre: string;
    public autor: string;
    public anioPublicacion: number

    constructor(nombre: string, autor: string, anio:number) {
        this.nombre = nombre,
        this.autor = autor,
        this.anioPublicacion = anio
    }

    public mostrarPropiedades(): void {
        console.log(`Nombre: ${this.nombre}\nAutor: ${this.autor}\nAño de publicación: ${this.anioPublicacion}`);
        
    }
}

const miLibro = new Libro("Estudio en Escarlata", "Arthur Conan Doyle", 1887);
miLibro.mostrarPropiedades();

