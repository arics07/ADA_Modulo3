// Ejemplo básico con objeto
let alumna = {
    nombre: 'Lucía',
    edad: 30,
    curso: 'Programación'
};

for (let propiedad in alumna) {
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`);
    
};

//propiedad 'as keyof typeof alumna' --> con esto le decimos al compilador que la variable
//'propiedad' es una clave válida de  las propiedades del objeto 'alumna' 
//(que podría ser nombre, edad o curso)


//Ejemplo con array
let lenguajes = ['JavaScript', 'Python', 'TypeScript'];

for (let indice in lenguajes) {
    console.log(`Índice: ${indice}, valor: ${lenguajes[indice]}`); 
};
