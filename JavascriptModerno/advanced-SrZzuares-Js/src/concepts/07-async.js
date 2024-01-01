import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element Elemento tipo HTML
 */
export const asyncComponent = (element) => {
    const id = '';
    findHero(id)
        .then((name) => element.innerHTML = name)
        .catch(error => element.innerHTML = error);

}

/**
 * 
 * @param {String} id identificador del heroe
 * @returns Retorna un Objeto del heroe encontrado
 */
const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero) throw `hero with id ${id} not found`;
    return hero?.name;
}