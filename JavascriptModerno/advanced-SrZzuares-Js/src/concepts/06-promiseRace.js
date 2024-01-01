
/**
 * 
 * @param {HTMLDivElement} element Elemento tipo HTML
 */
export const promiseRace = (element) => {
    const renderValue = value => {
        element.innerHTML = value;
    }
    //El primer argumento a llegar es el que obtiene.
    //funciona si queremos obtener algo de diferentes lados que tengan la misma informacion
    Promise.race([
        slowPromise(),
        mediumPromise(),
        // fastPromise(),
        slowPromise()
    ]).then(renderValue);
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