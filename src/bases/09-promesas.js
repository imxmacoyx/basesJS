import {getHeroeById, getHeroesByOwner} from './bases/08-exports';
/*
const promesa = new Promise( (resolve,reject) =>{
    setTimeout(() => {
        // Tarea 
        const heroe = getHeroeById(2);
        resolve(heroe)
        //reject('No se pudo encontrar el heroe');
    }, 2000);
});


promesa.then( (heroe) => {
    console.log(heroe);
}).catch( err => console.warn(err));
*/

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolver,reject) =>{
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if( p1 )
                resolver(p1);
            else
                reject('No se pudo encontrar el heroe');
        }, 2000);
    });

}

getHeroeByIdAsync(1)
    .then( console.log)
    .catch( console.warn);