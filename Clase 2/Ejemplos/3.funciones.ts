//1. función básica
function sumar(a:number, b: number):number {
    return a + b;
}

let resultadoSuma = sumar(1, 7);
console.log(resultadoSuma);

//2. función que no retorna nada
function mostrarMensaje(mensaje: string): void {
    console.log(mensaje);   
}

mostrarMensaje('Hola a todos!!');

//3. función con un parámetro opcional
function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}!`
    } else {
        return `Hola, ${nombre}`
    }
}

console.log(saludar('Leon', 'Bienvenido'));
console.log(saludar('Martin'));

function saludar2(nombre: string, saludo: string = 'Hola'): string {
    return `${saludo}, ${nombre}!`
}

console.log(saludar2('Ari'));
console.log(saludar2('Ana', 'Buenas tardes'));

