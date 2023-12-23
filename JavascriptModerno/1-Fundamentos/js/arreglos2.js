let persona = {
    vive: true,
    nombre: "Juan",
    edad: 25,
    estatura: 168.4,
    domicilio: "Lopex",
    cord: {
        max: 1222,
        min: .3333
    },
    telefonos: {
        numero1: 111111,
        numero2: 222222
    },
    'hola-mundo': "hola Mundo"
};
// obtener un objeto es:
console.log(persona.vive);
// acceder a una propiedad anidada se hace de la siguiente manera:
console.log(persona.cord.max)
console.log(persona.telefonos.numero2);

console.log(persona["hola-mundo"])
//Para eliminar un parametro de un objeto es:
delete persona["hola-mundo"];
console.log(persona);


let miObjeto = Object.entries(persona);
console.log(miObjeto);

//Congela lo que son los parametros y no pueden ser cambiados ni añadir nuevos
let miObjeto2 = Object.freeze(persona);
console.log(miObjeto2);

//Guardamos solo los valores de los parametros que tiene asignado el objeto
let valoresObjeto = Object.values(persona);
console.log(valoresObjeto);

//Devuelve las claves del Objeto
let keysObjeto = Object.keys(persona);
console.log(keysObjeto);
//o tambien
let nombreDeCadaParametro = Object.getOwnPropertyNames(persona);
console.log(nombreDeCadaParametro);

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {

//     console.log( 'nombre',personaje.nombre );
//     console.log( 'codeName',personaje.codeName );
//     console.log( 'vivo',personaje.vivo );
//     console.log( 'edad',personaje.edad );
//     console.log( 'trajes',personaje.trajes );

// }
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePropiedades(tony);