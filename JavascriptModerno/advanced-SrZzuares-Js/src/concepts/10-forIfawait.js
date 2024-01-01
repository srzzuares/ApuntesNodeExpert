import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async (element) => {

    const id = '5d86371fd55e2e2a30fe1cc4';
    // DE esta forma se puede pintar el nombre del heroe pero si no lo encuentra dara un throw error
    // const hero = await getHeroAsync(id);
    // element.innerHTML = hero.name;

    //Para eso se necesita poner validaciones como el if(await)
    // if (await getHeroAsync(id)) {
    //     element.innerHTML = 'Si existe';
    //     return;
    // }
    // element.innerHTML = 'Caiste, no existe.';

    const heroIds = heroes.map(hero => hero.id);
    const heroPrommises = getHeroesAsync(heroIds);
    for await (const hero of heroPrommises) {
        element.innerHTML += `${hero.name} <br>`;
    }
}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {

    const heroPromises = [];

    heroIds.forEach(id => {
        heroPromises.push(getHeroAsync(id));
    });

    return heroPromises;
}

const getHeroAsync = async (id) => {

    await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find(hero => hero.id === id);
}