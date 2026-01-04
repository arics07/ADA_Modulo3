/*4. Redes Sociales: Notificaciones de Amigos
Implementa un sistema de gestión de amigos en una red social. Cada amigo
debe tener un nombre y un estado (en línea o fuera de línea). Utiliza un
setInterval() para verificar el estado de los amigos cada 5 segundos y enviar una
notificación si un amigo se pone en línea. */

type Amigo = [string, boolean]; //nombre, estado

let amigos: Amigo[] = [['Yo', true]];

function agregarAmigo(nombre: string, estado: boolean) {
    const amigo1: Amigo = [nombre, estado];
    amigos.push(amigo1);
    console.log(`${amigo1[0]} se agregó exitosamente!`);
};

function mostrarAmigos() {
    amigos.forEach(a => console.log(`Nombre: ${a[0]} | Estado: ${a[1]}`));
};

agregarAmigo('Pepe Argento', false);
agregarAmigo('Moni Argento', true);
agregarAmigo('María Elena Fuseneco', true);

mostrarAmigos();


function verificarEstado() {
    setInterval(() => {
        amigos.forEach(amigo => {
            if (!amigo[1]) {
                amigo[1] = Math.random() < 0.5; // Cambiar aleatoriamente el estado
                if (amigo[1]) {
                    console.log(`Notificación: ${amigo[0]} se ha puesto en línea.`);
                }
            }
        });
    }, 5000); // Cada 5 segundos
};

verificarEstado();
