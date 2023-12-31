import { heroes } from '../data/heroes'
/**
 * 
 * @param {HTMLDivElement} element Elemento tipo HTML
 */
export const callbackComponent = (element) => {
    console.log("Callback");
    //Agrega id, luego el Callback con dos argumentos, el error si no encuentra id y el que si lo encontró
    findHero('5d86371fd55e2e2a30fe1cc3', (error, RecorreElArregloParaEncontrarElId) => { //Requiere id y el callback que recorre el arreglo de heroes
        //Al ser nulo es false y no entrara al if
        if (error) {
            element.innerHTML = error;
            return;
        }
        element.innerHTML = RecorreElArregloParaEncontrarElId?.name || 'indefinido'; //Pinta el nombre del heroe buscando su id
    });//El ? despues del RecorreElArregloParaEncontrarElId ? hace referencia que puede esta indefinido al buscar el nombre del heroe
}

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