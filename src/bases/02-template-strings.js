


const nombre = 'Marco';
const apellido = 'Valle';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log( nombreCompleto );

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`ESTE ES UN TEXTO: ${getSaludo(nombre)}`);