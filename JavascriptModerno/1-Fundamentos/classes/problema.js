function Persona(nombre, edad) {
    // Atributos de la clase persona
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = () => {
        console.log(`Te llamas ${this.nombre} y tienes ${this.edad} años`);
    }
}
// Creamos una instancia de la clase persona
const persona1 = new Persona("Juan", 25);
console.log(persona1);
persona1.imprimir();
//Las instancias se hacen o se crean por medio de la palabra new
