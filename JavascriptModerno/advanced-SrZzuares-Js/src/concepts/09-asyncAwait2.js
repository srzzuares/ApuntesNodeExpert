import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element Elemento tipo HTML
 */
export const asyncAwait2Component = async (element) => {
    const id = '5d86371fd55e2e2a30fe1cc3';
    const id2 = '5d86371fd55e2e2a30fe1cc4';
    console.time('Start');

    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    // element.innerHTML = `
    // value1 : ${value1} <br>
    // value2 : ${value2} <br>
    // value3 : ${value3} <br>
    // `;
    // Haciendo esto de la forma anterior, costa de 4535.66796875 ms

    const [val1, val2, val3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ])
    element.innerHTML = `
    value1 : ${val1} <br>
    value2 : ${val2} <br>
    value3 : ${val3} <br>
    `;
    //Haciendo una promise se tarda 2010.193115234375 ms
    console.timeEnd('Start');

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

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow Promise')
    }, 2000);
})
const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium Promise')
    }, 1500);
})
const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast Promise')
    }, 1000);
})