
const getImagen = async() => {
    try {
        const apiKey = 'qAP2cZd8hZK19MyeBqP3VerEvvPqz509';
        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await  respuesta.json();
        const {url} =  data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img); 
    } catch (error) {
        //Manejo de error
        console.error(error);
    }
}

getImagen();
