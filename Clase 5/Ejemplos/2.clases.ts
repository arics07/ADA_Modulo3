//Defino la clase Gato
class Gato {
    //propiedades
    public nombre: string;
    public edad: number;
    private raza: string;

    //constructor
    constructor(nombre: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza
    }

    //Método para información del gato
    public obtenerInformacion(): string {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nRaza: ${this.raza}`
    }

    //Método para cambiar la raza
    public cambiarRaza(nuevaRaza: string): void {
        this.raza = nuevaRaza
    }

};

//Instanciamos la clase Gato
const leon = new Gato('León', 3, 'Azul Ruso');

//Llamamos al método obtener información
console.log(leon.obtenerInformacion());

//Utilizo método cambiarRaza
leon.cambiarRaza('Callejero');
console.log(leon.obtenerInformacion());