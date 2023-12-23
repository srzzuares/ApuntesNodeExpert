class RectanguloArea {
    #area = 0; //Esto es un parametro o variable de tipo privado
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }
    calgularArea() {
        console.log(this.#area * 2);
    }
}

const rectangulo = new RectanguloArea(10, 15);
// rectangulo.#area  = 100;
rectangulo.calgularArea();

console.log(rectangulo);