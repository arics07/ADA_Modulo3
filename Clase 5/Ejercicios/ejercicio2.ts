/*
Ejercicio 2: Métodos en Objetos
1. Modifica el objeto del ejercicio anterior para que incluya un método
llamado descripcion() que devuelva una descripción del libro.
2. Llama al método y muestra el resultado en la consola.
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

    public descripcion(): void {
        console.log(`El libro se titula ${this.nombre} y fue escrito por el autor ${this.autor} en el año ${this.anioPublicacion}`);
        
    }
}

const miLibro = new Libro("Estudio en Escarlata", "Arthur Conan Doyle", 1887);
miLibro.descripcion();