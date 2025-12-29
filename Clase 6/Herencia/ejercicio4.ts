/*
Ejercicio 4: Herencia de Métodos y Sobrescritura
Consigna: Define una clase base Flor con el método describir(), que imprime un mensaje general 
sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol, cada una sobrescribiendo 
el método describir() con un mensaje específico.
*/

class Flor {
    describir(): void {
        console.log('Soy una bella flor!');
    };
};



class Rosa extends Flor {
    describir(): void {
        console.log('Soy una bella Rosa!');
    };
};


class Girasol extends Flor {
    describir(): void {
        console.log('Soy un bello Girasol!');
    };
};


const unaFlor = new Flor();
unaFlor.describir();

console.log('-----------------------------');

const unaRosa = new Rosa();
unaRosa.describir();

console.log('-----------------------------');

const unGirasol = new Girasol();
unGirasol.describir();

console.log('-----------------------------');