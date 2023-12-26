/**
 * 
 * @param {Array<String>} deckDeCartas Ejemplo: ['A', 'J', 'Q', 'K'];
 * @returns {String} Devuelve un string Ejemplo '2A' y elimina un string del array de entrada.
 */
// Esta función me permite tomar una carta
export const pedirCarta = (deckDeCartas = []) => {
    if (deckDeCartas.length === 0) throw 'No hay cartas en el deck';
    return deckDeCartas.pop();;
}