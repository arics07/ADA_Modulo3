//Definición de interfaz 'Estudiante

interface Estudiante {
    nombre: string;
    edad: number;
    materiaFavorita: string;
    promedio: number;

    saludar: () => void;
    obtenerDetalles: () => string;
}

// Creación de un objeto que cumple con la interfaz 'Estudiante'
const estudiante1: Estudiante = {
    nombre: 'Ana',
    edad: 21,
    materiaFavorita: 'Matemática',
    promedio: 9.5,

    //implementamos los métodos
    saludar: function() {
        console.log(`Hola! Mi nombre es ${estudiante1.nombre}. Tengo ${estudiante1.edad} años y mi materia favorita es ${estudiante1.materiaFavorita}`);       
    },

    obtenerDetalles: function() {
    return `Nombre: ${estudiante1.nombre}\nEdad: ${estudiante1.edad}\nMateria favorita: ${estudiante1.materiaFavorita}\nPromedio: ${estudiante1.promedio}`
    }
};

//Usamos el método saludar
estudiante1.saludar();

//Usamos el método obtenerDetalles
let detalles = estudiante1.obtenerDetalles();
console.log(detalles);
