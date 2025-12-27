//Array simple
let frutas: string[] = ['manzana', 'banana', 'pera', 'durazno'];
let verduras: Array<string> = ['Lechuga', 'Espinaca', 'Acelga']

console.log(frutas);
console.log(verduras);

//usamos diferentes métodos

//agregamos una fruta al final
frutas.push('frutilla')
console.log(frutas);

//eliminamos la última fruta y la guardamos en una variable
let ultimaFruta = frutas.pop();
console.log(frutas);
console.log(ultimaFruta);

//convinamos todos los elementos de un array en un cadena
let stringDeFrutas = frutas.join(', ');
console.log(stringDeFrutas);
