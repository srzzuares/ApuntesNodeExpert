import { heroes } from '../data/heroes'

// es un pacto de dos partes. prometen hacer las dos partes pero uno puede que rompa y saldra error
/**
 * 
 * @param {HTMLDivElement} element Elemento tipo HTML
 */
export const promiseComponent = (element) => {
    const renderHero = (hero => {
        element.innerHTML = hero.name
    })
    const renderHeroError = (error => {
        element.innerHTML = `<h3>${error}</h3>`;
    })
    const id = '5d86371fd55e2e2sa30fe1cc4';
    findHero(id)
        .then(renderHero)
        .catch(renderHeroError);
}

/**
 * 
 * @param {String} id
 * @returns {Promise<String>} 
 */
const findHero = (id) => {
    return new Promise((resolve, reject) => {
        const heroe = heroes.find(hero => hero.id === id);
        if (heroe) {
            resolve(heroe);
            return;
        }
        reject(`No se encontró el héroe con ID ${id}`);
    })
}