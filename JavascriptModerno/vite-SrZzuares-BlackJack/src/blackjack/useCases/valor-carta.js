/**
 * 
 * @param {String} carta Obtiene una carta de tipo String
 * @returns {Number} Retorna el valor de la carta en int
 */

export const valorCarta = (carta = '') => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}