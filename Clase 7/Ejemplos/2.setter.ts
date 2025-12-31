class Triangle {
    private _base: number;
    private _height: number;

    constructor() {
        this._base = 0;
        this._height = 0;
    };

    public set base(value: number) {
        if (value > 0) {
            this._base = value
        } else {
            console.log("La base del trángulo debe ser mayor a 0.");
            
        };
    };

    public set height(value: number) {
        if (value > 0) {
            this._height = value
        } else {
            console.log("La base del trángulo debe ser mayor a 0.");
            
        };
    };

    public calcularArea(): number {
        return this._base * this._height / 2;
    };

};


const triangulo = new Triangle();
triangulo.base = 8;
triangulo.height = 9;
console.log(`El área del triángulo es de ${triangulo.calcularArea()}`);

