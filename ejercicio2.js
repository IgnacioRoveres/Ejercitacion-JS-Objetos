// Ejercicio 2: Añadir un método al objeto auto que devuelva una cadena con la descripción del auto.

const auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2016,
    obtenerDescripcion: function() {
        return `${this.año} ${this.marca} ${this.modelo}`;
    }
}

console.log (auto.obtenerDescripcion())