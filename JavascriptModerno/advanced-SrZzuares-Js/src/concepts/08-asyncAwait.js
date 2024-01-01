import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element Elemento tipo HTML
 */
export const asyncAwaitComponent = async (element) => {
    const id = '5d86371fd55e2e2a30fe1cc3';
    const id2 = '5d86371fd55e2e2a30fe1cc4';

    try {
        const hero1 = await findHero(id);
        const hero2 = await findHero(id2);
        element.innerHTML = `${hero1.name} / ${hero2.name}`;
    } catch (error) {
        element.innerHTML = error;
    }

}

/**
 * 
 * @param {String} id identificador del heroe
 * @returns Retorna un Objeto del heroe encontrado
 */
const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero) throw `hero with id ${id} not found`;
    return hero;
}