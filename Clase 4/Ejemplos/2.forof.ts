// Ejemplo básico de array
export let lenguajes = ['JavaScript', 'Python', 'TypeScript'];

for (let lenguaje of lenguajes) {
    console.log(`Ejemplo de for...of con array: ${lenguaje}`);
}

//Ejemplo con una cadena de texto
let saludo = 'Hola';

for (let letra of saludo) {
    console.log(`${letra}`);
    
}


//for of recorre los valores. No se usa con objetos!
//mientras que for in recorre las claves o indices o nombre de la propiedad de un objeto