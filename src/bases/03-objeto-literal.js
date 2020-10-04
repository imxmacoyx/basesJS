const persona = {
    nombre: 'marco',
    apellido: 'valle',
    peliculas: [1,2,3,4,7],
    edad: 45,
    direccion:{
        ciudad: 'Mante',
        zip: '89849',
        state: 'Tamaulipas',
    }
};


console.table({persona,direccion,ciudad});

const persona2 = { ...persona};
//const persona2 = persona;
persona2.nombre = 'Peter';


console.log({persona2});