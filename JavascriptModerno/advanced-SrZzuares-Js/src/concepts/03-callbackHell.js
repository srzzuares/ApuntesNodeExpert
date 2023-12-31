//Callback hell se refiere como las anidaciones o if tras otro if y sucecivamente.
import { heroes } from '../data/heroes'
/**
 * 
 * @param {HTMLDivElement} element Elemento tipo HTML
 */
export const callbackComponent2 = (element) => {
    console.log("Callback");
    const idHero1 = '5d86371fd55e2e2a30fe1cc4';
    const idHero2 = '5d86371fd55e2e2a30fe1cc3';
    //Agrega id, luego el Callback con dos argumentos, el error si no encuentra id y el que si lo encontró
    findHero(idHero1, (error, idHeroE) => {
        if (error) {
            element.innerHTML = error;
            return;
        }
        findHero(idHero2, (error, idHero2E) => {
            if (error) {
                element.innerHTML = error;
                return;
            }
            element.innerHTML = `${idHeroE.name} / ${idHero2E.name}`;
        })
    });
}
// El codigo de arriba es bueno solo que si queremos tener 4 ids para encontrar e imprimimr, seria mas complicado por que si uno no se encuentra, todo sera como no encontrado los ids.
// Similar al true y true  y true es igual a true 
// Si true y true y false sera false
// + + + = +
// - + + = -

//Codigo semiasincrono paa poder reflejar los errores facilmente con callbacks
/**
 * 
 * @param {String} id Identificado Heroe
 * @param {(error: String|nunll,hero: Object) => void} callback 
 */
const findHero = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id);//encuentra el id
    if (!hero) {
        callback(`Hero with id  ${id} not found`);//Refleja que no encontro el id
        return;
    }
    callback(null, hero);//Se tranforma en dos de tipo null si es que da error del id y el hero si lo encuentra
}