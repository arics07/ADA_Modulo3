//Utilizaremos la EXPORTACIÓN SEPARADA
//Primero definimos las constantes y las exportamos al final del archivo

const rectangleArea = (width: number, height: number): number => {
    return width * height;
};

const RECTANGLE_NAME = 'Rectangle';

//Exportación separada
export {rectangleArea, RECTANGLE_NAME};