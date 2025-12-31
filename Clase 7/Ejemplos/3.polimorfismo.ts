abstract class Pago {
    abstract procesarPago(monto: number): void;
};

//Vamos a usar Pago con clases derivadas que tienen comportamientos específicos.

class PagoConTarjeta extends Pago {
    
    procesarPago(monto: number): void {
        console.log(`Pago de ${monto} realizado con tarjeta.`);
    }
    
};


class PagoeEnEfectivo extends Pago {

    procesarPago(monto: number): void {
        console.log(`Pago de ${monto} realizado en efectivo.`);
        
    }
};


class PagoeConTransferencia extends Pago {

    procesarPago(monto: number): void {
        console.log(`Pago de ${monto} realizado por transferencia.`);
        
    }
};




//Uso del polimorfismo
const procesar = (pago: Pago, monto: number) => {
    pago.procesarPago(monto);
};


//Inicializo las clases
const pago1 = new PagoConTarjeta();
const pago2 = new PagoeEnEfectivo();
const pago3 = new PagoeConTransferencia();


procesar(pago1, 10000);
procesar(pago2, 40000);
procesar(pago3, 12000);