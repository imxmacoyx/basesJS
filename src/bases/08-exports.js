import heroes from '../data/heroes';
import {owner} from '../data/heroes';

console.log(owner);
console.log( heroes );

export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}


// find, filter
export const getHeroesByOwner = (owner) => {
    return heroes.filter( (heroe) => heroe.owner === owner);
}

console.log( getHeroesByOwner('DC'));