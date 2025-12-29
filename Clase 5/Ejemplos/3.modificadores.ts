//Defino la clase Animal
class Animal {
    public nombre: string;
    private tipoAlimento: string;
    protected especie: string;

    //constructor
    constructor(nombre: string, tipoAlimento: string, especie: string) {
        this.nombre = nombre;
        this.tipoAlimento = tipoAlimento;
        this.especie = especie
    }

    //Método público
    public describirAnimal(): void {
        console.log(`Este es ${this.nombre}, un animal de la especie ${this.especie}`);    
    }

    //Método privado
    private mostrarAlimento(): void {
        console.log(`${this.nombre} se alimenta de ${this.tipoAlimento}`);
    }

    //Método protected
    protected sonidoAnimal(): void {
        console.log(`${this.nombre} está haciendo un sonido.`);
    }

    //Método público para acceder al método privado dentro de la clase
    public alimentarAnimal(): void {
        this.mostrarAlimento();
    }
};


//Clase hija de la Clase Animal
class Perro extends Animal {
    //Perro no va a acceder a lo private de Animal, pero si a lo protected
    constructor(nombre: string, tipoAlimento: string) {
        super(nombre, tipoAlimento, 'Can'); //llama al contructor de la clase padre
    }

    //Método público de la clase hija que va a acceder
    public hacerSonido(): void {
        this.sonidoAnimal();
        console.log(`${this.nombre} está ladrando.`);
    }
};

//Creo una instancia de animal
const miAnimal = new Animal('Michi', 'pollo', 'Felino');
miAnimal.describirAnimal(); //método public
miAnimal.alimentarAnimal() //método public
//no puedo acceder a los métodos protected ni private

console.log('-----------------------------');


//Creo una instancia de la clase Perro
const miPerro = new Perro('Firulais', 'Croquetas');
miPerro.describirAnimal(); //método público heredado
miPerro.hacerSonido(); //método público heredado, que accede a un protected
miPerro.alimentarAnimal(); //método public heredado
