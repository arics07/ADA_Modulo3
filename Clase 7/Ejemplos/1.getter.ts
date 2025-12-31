class Rectangle {
    private _width: number;
    private _heigth: number;

    constructor(width: number, heigth: number) {
        this._width = width;
        this._heigth = heigth
    };

    public get area(): number {
        return this._width * this._heigth
    };

    public get height(): number {
        return this._heigth;
    };

    public get width(): number {
        return this._width;
    };

};


const rectangulo = new Rectangle(10, 7);
console.log(`Ancho del rectángulo: ${rectangulo.width}`);
console.log(`Altura del rectángulo: ${rectangulo.height}`);
console.log(`Area del rectángulo: ${rectangulo.area}`);
