/* 2. Florería: Envío Programado de Pedidos
Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe
contener el nombre del cliente, la cantidad de flores y el tipo de flores.
Implementa las siguientes funciones:
• Añadir un pedido.
• Programar el envío de un pedido utilizando setTimeout() para simular un retraso de 5 segundos.
• Mostrar todos los pedidos pendientes. */

type Pedido = [string, number, string]; //nocmbre cliente, cant. flores, tipo de flor

let pedidos: Pedido[] = []; 

function agregarPedido(nombreCliente: string, cantidadFlores: number, flor: string) {
    const pedido: Pedido = [nombreCliente, cantidadFlores, flor];
    pedidos.push(pedido);
    console.log('El pedido fue agregado.');
};

function mostrarPedidos() {
    pedidos.forEach(p => console.log(p))
};


agregarPedido('Ana García', 6, 'Rosas');
agregarPedido('Mario Rossi', 12, 'Jazmín');
agregarPedido('Karina Lin', 10, 'Margarita');

mostrarPedidos();

function realizarEnvio(index: number) {
    setTimeout(() => {
        if (pedidos[index]) {
            console.log(`El pedido para ${pedidos[index][0]} ha sido enviado.`); // pedidos[indice][0]  corresponde al nombre de la persona que realizó el pedido
            pedidos.splice(index, 1); // Eliminar el pedido de la lista
        } else {
            console.log("Pedido no encontrado.");
        };
    }, 5000);
};


realizarEnvio(0);



