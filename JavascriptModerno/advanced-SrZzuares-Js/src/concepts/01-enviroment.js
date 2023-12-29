
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const enviromentsComponent = (element) => {
    const html = `variables de entorno: ${import.meta.env.VITE_API_KEY}`; //Seleccionamos algo del objeto del .env
    element.innerHTML = html;
}