// Intervalo de forma indefinida (cancelación manual)
let contador = 0;

const intervalo = setInterval(() => {
    contador ++;
    console.log(`Contador indefinido: ${contador}`);   
}, 1000); //1000 mseg = 1 seg

console.log('Intervalo indefinido inicializando...');
 // si ejecutamos acá, el código se cortará usando ctrl + C (manual)
 