/*
Ejercicio 4: Función que devuelve un objeto
Consigna: Crea una función llamada crearLibro que acepte tres parámetros:
titulo (string), autor (string) y paginas (number). La función debe devolver un
objeto con esas propiedades. Luego, crea dos libros utilizando la función y
muestra sus detalles en la consola.
*/

type libro = {
    titulo: string,
    autor: string,
    paginas: number
}

let crearLibro = (titulo: string, autor: string, paginas: number): libro => {
    return ({titulo: titulo,
             autor: autor,
             paginas: paginas
            });
}

console.log(crearLibro('Emma', 'Jana Austen', 324));
