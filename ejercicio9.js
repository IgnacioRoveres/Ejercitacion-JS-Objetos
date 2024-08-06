
    // Ejercicio 9: Crear un array de autos y utilizar el método forEach para imprimir la descripción de cada auto.


const autos = [
    {Marca:"Royota", Modelo: "Corolla", Año: 2000},
    {Marca:"Renault", Modelo: "Clio", Año: 2004},
    {Marca:"Volkswagen", Modelo: "Golf", Año: 2002},
];

function imprimirDescripcion (auto){
    console.log(`${auto.Marca} ${auto.Modelo} ${auto.Año}`);
}

autos.forEach(imprimirDescripcion);


