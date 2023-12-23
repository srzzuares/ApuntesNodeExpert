let cosas = ["celular", "Laptop", "Computadora", "Tablet"];

console.log(cosas[0]); //Imprime la posicion 0 que es celular
//Acceder a una posición en específico de un array, si no existe esa posición imprimirá undefined
//Para acceder a todas las propiedades de un array se utiliza el método forEach()
cosas.forEach(e => {
    console.log(`${e} son tecnologias`);
});
console.log(cosas[0].concat("asd")); //Une la palabra anterio con el nuevo dentro de concat

let miArray = [1, 2, 3];

//se pueden añadir arreglos dentro de otros arreglos
miArray.push([4, 5, 6]);
console.log(miArray);
//Para poder obtener el numero 6 del arreglo que agregamos
console.log("Mi arreglo numerico es:  " + miArray[3][2]);
//Esto significa que escribimos la posicion donde se encuentra primero el arreglo que agregamos y luego la otra posicion donde esta el numero 6
// Si quiero obtener dentro de una variable el ultimo valor de un arreglo es
let ultimoValorArreglo = miArray[3][miArray[3].length - 1]