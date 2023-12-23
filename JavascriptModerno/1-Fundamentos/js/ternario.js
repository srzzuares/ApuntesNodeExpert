const notas = 90;
//Para que simplifique mejor tu codigo y no utilizes lo que son los if else if, con ternario.
const grado = notas >= 95 ? 'A+' :
    notas >= 90 ? 'A' :
        notas >= 85 ? 'B+' :
            notas >= 80 ? 'B' :
                notas >= 75 ? 'C+' :
                    notas >= 70 ? 'C' : 'Reprobaste Chakal';
console.log(grado);