let frutas = ["Mango", "Manzana", "Pera"];
console.time("slice");
let nuevasFrutas = frutas.slice()
console.timeEnd("slice");

console.time('spread')
let nuevasFrutas2 = [...frutas];
console.timeEnd('spread')
// nuevasFrutas.push("Fresa");
// console.log({ frutas, nuevasFrutas })


// let frutas = ["Mango", "Manzana", "Pera"];
// let nuevasFrutas = frutas;
// nuevasFrutas.push("Fresa");
// console.log({ frutas, nuevasFrutas })

// let frutas = ["Mango", "Manzana", "Pera"];
// let nuevasFrutas = [...frutas];
// nuevasFrutas.push("Fresa");
// console.log({ frutas, nuevasFrutas })

// let frutas = ["Mango", "Manzana", "Pera"];
// let nuevasFrutas = frutas.slice()
// nuevasFrutas.push("Fresa");
// console.log({ frutas, nuevasFrutas })
