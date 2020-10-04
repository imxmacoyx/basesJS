
// Desestructuración
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const {nombre: nombre2 } = persona;

console.log( nombre2 );

const retornaPersona = (user) => {
    const { edad, clave, nombre } = user;
    console.log(edad,clave,nombre);
};

retornaPersona ( persona );


const retornaPersona2 = ({nombre,edad,rango = 'Capitán'}) =>{
    console.log( nombre,edad,rango);
};

retornaPersona2 ( persona );


const useContext = ({clave,nombre,edad,rango='Capitan'}) => 
    (
        {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 123.1231,
                lng: -123.1231
            }
        }
    );

const {nombreClave, anios, latlng:{lat,lng} } = useContext( persona );
console.log( nombreClave, anios);
console.log( lat, lng );