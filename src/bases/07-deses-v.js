const personajes = ['Gokue', 'Vegeta', 'Trunks'];

console.log( personajes[0]);

const [,,marco] = personajes;
console.log(marco);


const retornaArreglo = () => 
    ([
        'abc',
        123
    ])


const [ letras, numeros] = retornaArreglo();
console.log(letras,numeros);


//Tarea

const useState = (valor) => 
(
    [valor, () => {
        console.log('Hola mundo');
    }]
);

const [nombre, setNombre] = useState('Goku');
//console.log(arr);


console.log( nombre);
setNombre();