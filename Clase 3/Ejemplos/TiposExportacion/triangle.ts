//Declaramos una función privada (que no será exportada)
const logCalculation = (area: number) => {
    console.log(`Calculated area ${area}`);
};

//Función que será exportada directamente
export const triangleArea = (base: number, height: number): number => {
    const area = (base * height) / 2;
    logCalculation(area);
    return area;    
};

export const TRIANGLE_NAME = "Triangle"; 