// en este caso usaremos clearTimeOut()
console.log('Ejemplo con cancelación');

let temporizador = setTimeout(() => {
    console.log('Este mensaje no se va a mostrar porque se cancela antes');
    
}, 3000);

clearTimeout(temporizador);