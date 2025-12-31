/*
2. Ejercicio de Libro
Crea una clase Libro que represente un libro en una biblioteca. 
Esta clase debe tener propiedades privadas para titulo, autor, anioPublicacion, 
y disponible. Implementa métodos para prestar y devolver el libro, asegurando 
que solo se pueda prestar si está disponible y que se pueda devolver solo si ha 
sido prestado. Imprime un mensaje en caso de que se intente realizar una acción no válida.
*/

class Libro {

    private _titulo: string;
    private _autor: string;
    private _anio: number;
    private _disponible: boolean;

    constructor(titulo: string, autor: string, anio: number) {
        this._titulo = titulo.toUpperCase();
        this._autor = autor.toUpperCase();
        this._anio = anio;
        this._disponible = true;
    };

    private disponible() {
        this._disponible = true;        
    };

    private noDisponible() {
        this._disponible = false;
    };

    public prestarLibro(titulo: string, autor: string) {
        if (this._disponible) {
            this.noDisponible();
            console.log('El libro fue prestado con éxito.');
        } else {
            console.log('El libro no puede ser prestado, ya que no se encuentra disponible.');
        };
    };

    public devolverLibro(titulo: string, autor: string) {
        if (!this._disponible) {
            this.disponible();
            console.log('El libro fue devuelto con éxito');        
        } else {
            console.log('El libro no puede ser devuelto porque no fue prestado.');   
        };
    };

};



const libro = new Libro('Las Aventuras de Pepito', 'Juan Perez', 2025);
libro.devolverLibro('LAS aventuras DE PepitO', 'JUAN perez');
libro.prestarLibro('Las Aventuras de Pepito', 'Juan Perez');
libro.prestarLibro('Las Aventuras de Pepito', 'Juan Perez');