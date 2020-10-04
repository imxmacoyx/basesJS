// Funciones en JS


const saludar = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludarSimp = ( nombre ) => 
`Hola, ${nombre}`;


console.log( saludar('marco'));
console.log( saludarSimp('Marco'));

const getUser = () => {
    return {
        id: 'ABC',
        username: 'macoy'
    }
}

console.log( getUser());

// Tarea
function getUsuarioActivo(nombre) {
    return {
        id: 'ABC',
        username: nombre
    }
};

const usuarioActivo = (nombre) =>({
    id:'ABC',
    username: nombre
});




const user = usuarioActivo('Macoy');
console.log(user);