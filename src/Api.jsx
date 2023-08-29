//Importar lugar API Javascript libreria de cliente
import img from  './img/photo.png';
import Places from 'google-maps-places';
//Crea un lugar con la API segun el objeto creado por el cliente
const client = new Places({
    apiKey: "Atrio"
});

//Obtener el archivo de la foto 
const photoFile = document.getElementById({img}).files[0];

//Pide el lugar del API para reconocer el lugar  in la foto
const placesResponse = await client.photoSearch({
    query: "",
    photo: photoFile,
})

//Imprimir el resultado del requerimiento
console.log(placesResponse);

export default Api;