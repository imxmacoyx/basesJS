const apiKey = 'qAP2cZd8hZK19MyeBqP3VerEvvPqz509';

const httpcall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpcall
    .then( (resp) => resp.json() )
    .then (({data}) => {
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch( console.warn);