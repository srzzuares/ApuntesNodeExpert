let dia = 2;

//Sin utilizar if else imprimir lo que es el dia correspondiente empezando 0 en domingo.
//Los dos primero son mejores por el codigo limpio. 
//Array
let diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
console.log(diasDeLaSemana[dia]);

//Objeto
dia = 6
let diasDeLaSemana2 = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miercoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sabado"
};

console.log(diasDeLaSemana2[dia] || "Dia no definido")

//Dentro de una funcion retornado
dia = 4
let diasDeLaSemana3 = {
    0: () => "Domingo - 0",
    1: () => "Lunes - 1",
    2: () => "Martes - 2",
    3: () => "Miercoles - 3",
    4: () => "Jueves - 4",
    5: () => "Viernes - 5",
    6: () => "Sabado - 6"
};

console.log(diasDeLaSemana3[dia]() || "Dia no definido")

dia = 1
switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Día no válido")
        break;
}

let a = dia == 2 ? "Es Martes" : "No es Martes";
console.log({ a });

