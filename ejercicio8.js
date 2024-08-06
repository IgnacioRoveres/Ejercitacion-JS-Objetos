
    // Ejercicio 8: Añadir un método a la función constructora Auto para mostrar la descripción del auto.
   
function Auto (marca, modelo, año) {
        this.marca = marca,
        this.modelo = modelo,
        this.año = año,
        this.mostrarDescripcion = function() {
            return `Este es un ${this.marca} ${this.modelo} del año ${this.año}.`;
          };
}

const miAuto = new Auto (
    'Toyota', 
    'Corolla', 
    '2022');


console.log(miAuto.mostrarDescripcion());