// Definición de un objeto básico
let auto = {
    marca: 'Citroen',
    modelo: 'C3',
    anio: 2024
}

// mostramos las propiedades
console.log(auto.marca);
console.log(auto.modelo);
console.log(auto.anio);


// Definición de un objeto con declaración explicita del tipo
let libro: {titulo: string; autor: string; anio: number} = {
    titulo: "Emma",
    autor: "Jane Austen",
    anio: 1815
}


// Objetos con propiedades opcionales
let estudiante: {nombre: string; edad?: number} = {
    nombre: 'Ariadna',
}

console.log(estudiante.nombre);
console.log(estudiante.edad);
console.log(estudiante.edad ?? "Desconocida"); // ??: operador de coalescencia nula (nullish coalescing operator)
// se usa ? cuando hay dos opciones posibles, cuando hay una sola usamos ??


// Métodos en un objeto
let perro = {
    nombre: 'Firulais',
    raza: 'Golden',
    
    ladrar: function() {
        return `${this.nombre} está ladrando!`
    }
}

console.log(perro.ladrar());

//2:00:00