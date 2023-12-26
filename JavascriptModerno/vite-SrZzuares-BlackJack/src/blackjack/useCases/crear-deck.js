import _ from 'underscore';

/**
 * 
 * @param {Array<String>} tipoDeCartas Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} cartasEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas.
 */
export const crearDeck = (tipoDeCartas = [], cartasEspeciales = []) => {
    if (!tipoDeCartas || tipoDeCartas.length === 0) throw new Error('tipoDeCartas es obligatorio como un arreglo de string');
    if (!cartasEspeciales || cartasEspeciales.length === 0) throw new Error('cartasEspeciales es obligatorio como un arreglo de string');
    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipoDeCartas) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tipoDeCartas) {
        for (let esp of cartasEspeciales) {
            deck.push(esp + tipo);
        }
    }
    return _.shuffle(deck);
}