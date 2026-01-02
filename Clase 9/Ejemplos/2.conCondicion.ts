// Intervalo con condición de parada
let contador1 = 0;

const intervalo1 = setInterval(() => {
    contador1 ++;
    console.log(`Contador con condición: ${contador1}`);

    //condición
    if (contador1 === 5) {
        clearInterval(intervalo1); //cancela el intervalo cuando llega a a5
        console.log('El intervalo llegó a su condición de fin.');        
    };
    
}, 2000);

//se va a imprimir cada 2 segundos, 5 (intervalo1) veces