//npx ts-node 2.diferenciados.ts
//1. any: permite almacenar cualquier tipo de dato sin restricción
let anyValue: any =  "Hola, soy un valor de tipo any." //inicialmente es una cadena
console.log(anyValue);
anyValue = 39;
console.log(anyValue);
anyValue = { name: "Lola" } //ahora es un objeto
console.log(anyValue);

//2. unknown: similar a any pero va a requerir verificar
let unknownValue: unknown = "Hola, soy unknown!";
console.log(unknownValue);
//hacemos la verificacioin de tipo
if (typeof unknownValue === "string"){
    console.log(unknownValue.toLocaleUpperCase()); 
} else {
    console.log("El tipo de dato no es String.");
};

//3.void: se usa en funciones que no retornan un valor
function logMessage(message: string): void {
    console.log(message);
};

console.log(`Esto es una función void: ${logMessage("Holiiii, soy void")}`);

//4.never: representa funciones que nunca van a retornar nada, como las que arrojan errores o bucles infinitos
function throwError(ErrMessage: string): never {
    throw new Error(ErrMessage);
};

//throwError("Esta es una función de error y no retorna nada...");

function infiniteLoop(): never {
    while (true) {
        console.log("Este bloque nunca termina");      
    };
};

//infiniteLoop();
//ctrl + c para finalizar

//5. null y undefined: representan ausencia de un valor
let nullValue: string | null = null;
console.log(`Hola soy null: ${nullValue}`);

nullValue = "Ahora soy un string, jeje! :D";
console.log(`Seguis siendo null? ${nullValue}`);

let undefinedValue: undefined = undefined;
console.log(`Hola undefined!: ${undefinedValue}`);


//6. object: representa cualquier valor que no sea primitivo
let objectValue: object = { key: "2323443vfv34rf335t2"}
console.log(`Hola object!: ${objectValue}`);
console.log(objectValue);

objectValue = [1, 43, 63, 81];
console.log(`Hola object!: ${objectValue}`);
console.log(objectValue);

//Ejemplo de uso de todos los tipos de datos en un contexto:
function processData(valor: any): void {
    if (typeof valor ===  "string") {
        console.log(`El valor ingresado es una cadena de texto: ${valor}`);
    } else if (typeof valor === "number") {
        console.log(`El valor ingresado us un número: ${valor}`);
    } else if (valor === null || valor === undefined) {
        console.log(`El valor es null o undefined: ${valor}`);
    } else {
        console.log("El valor ingresado es de otro tipo");
    };
};

processData("Holiiiiii");
processData(63);
processData(null);
processData(undefined);
processData({key:"value"});