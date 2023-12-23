class CarroNuevo {
    static _conteo = 0; //Estatico y puede cambiar siempre y cuando este dentro de la clase del constructor y se inicializa por medio del nombre de clase y luego el nombre de la variable estatico.
    static get getconteo() { return this._conteo + ' - instancias.'; } //Igual se puede ser metodos estaticos.

    //Atributos de la clase persona nueva.
    nombre = '';
    modelo = '';
    color = '';
    constructor(nombre = 'Sin Nombre', modelo = 'Sin especificar', color = 'Sin especificar') {
        this.nombre = nombre,
            this.modelo = modelo,
            this.color = color
        CarroNuevo._conteo++
    }
    //Metodo Set de añadir un parametro a la clase
    set setNumeroPuertas(numPuertas) {
        this.puertas = numPuertas
    }
    //Metodo Get Para poder obtener un dato especificado
    get getModeloDeCoche() {
        return `Este coche es modelo ${this.modelo}`;
    }
}

const persona2 = new CarroNuevo('Crystian', 'Mustang', 'Gris Plateado');
//Poder asignar un parametro por medio de un set
persona2.setNumeroPuertas = 4;
//Poder obtener un parametro por medio de un get
console.log(persona2.getModeloDeCoche);
console.log(CarroNuevo.getconteo);