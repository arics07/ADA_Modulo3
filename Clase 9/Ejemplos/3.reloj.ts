function reloj() {
    const ahora = new Date(); // crea una instancia de Date -> fecha y hora ctualizada

    const horas = ahora.getHours() //obtenemos las horas de 00 a 23
    const minutos = ahora.getMinutes() //idem minutos, de 00 a 59
    const segundos = ahora.getSeconds() //idem segundos

    //muestro la hora acyual
    console.log(`${horas}:${minutos}:${segundos}`);
    
};

//reloj(); //imprime la hora actual y corta

let relojIntervalo = setInterval(reloj, 1000); // cada segundo se actualiza