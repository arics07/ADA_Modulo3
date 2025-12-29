//Ejemplo de función genérica

function identidad<T>(valor: T) {
    return valor
};

//ejemplos de uso
let numero = identidad<number>(10); // T va a ser de tipo number
console.log(numero);

let texto = identidad<string>('hola'); // Y va a ser un string
console.log(texto);
