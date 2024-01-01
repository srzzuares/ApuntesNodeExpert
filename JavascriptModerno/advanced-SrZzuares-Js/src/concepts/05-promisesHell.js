import { heroes } from '../data/heroes'

// es un pacto de dos partes. prometen hacer las dos partes pero uno puede que rompa y saldra error
/**
 * 
 * @param {HTMLDivElement} element Elemento tipo HTML
 */
export const promiseComponent2 = (element) => {
    const render2Heros = ((hero, hero2) => {
        element.innerHTML = `<h2>${hero.name}</h2><br><h2>${hero2.name}</h2>`;
    })
    const renderHeroError = (error => {
        element.innerHTML = `<h3>${error}</h3>`;
    })
    const id = '5d86371fd55e2e2a30fe1cc3';
    const id2 = '5d86371fd55e2e2a30fe1cc4';
    //Primera firna de llamar un promise
    // findHero(id)
    //     .then((hero) => {
    //         findHero(id2)
    //             .then(hero2 => {
    //                 render2Heros(hero, hero2);
    //             })
    //             .catch(renderHeroError);
    //     })
    //     .catch(renderHeroError);


    //Segunda forma de llamar un promise
    // let hero1;
    // findHero(id)
    //     .then(hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then(hero2 => {
    //         render2Heros(hero1, hero2);
    //     })
    //     .catch(renderHeroError);

    //Tercera forma de llamar una promise con All
    Promise.all(
        [
            findHero(id),
            findHero(id2)
        ]
    ).then(([hero, hero2]) => render2Heros(hero, hero2))
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