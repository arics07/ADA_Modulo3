// Intervalo de forma indefinida (cancelación manual)
let contador = 0;

const intervalo = setInterval(() => {
    contador ++;
    console.log(`Contador indefinido: ${contador}`);   
    clearInterval(10);
}, 1000); //1000 mseg = 1 seg

console.log('Intervalo indefinido inicializando...');

 