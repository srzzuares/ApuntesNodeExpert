/**
 * 
 * @param {String} carta Obtener string de la carta
 * @returns {HTMLImageElement} Retorna una imagen
 */
export const crearCartaHTML = (carta) => {
    if (!carta) throw new Error("Es obligatorio el argumento de la carta");
    const imgCarta = document.createElement('img');
    imgCarta.src = `public/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}