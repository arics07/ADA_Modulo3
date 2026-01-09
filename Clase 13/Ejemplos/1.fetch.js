// Definir la función asíncrona
async function fetchCharacter(id) {
    try {
        //Validación de ID
        if (!id) throw new Error('No ingresó un ID.');
        //Hacemos la solicitud a la API
        const response = await fetch(`https://swapi.py4e.com/api/people/${id}/`);

        //Verificación si la rta fue exitosa
        //response.ok es 200 (todo ok)
        if (!response.ok) throw Error(`Personaje no encontrado ${response.status}`)
        //Convierto la rta a formato json
        const character = await response.json();
        //Imprimo el resultado en la consola
        console.log(`Información del personaje: `, character);
        
    } catch (error) {
        console.error('Error: ', error.message);
    };
};

//Llamo a la función
fetchCharacter(3);
fetchCharacter(34);
