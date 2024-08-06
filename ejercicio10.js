
    // Ejercicio 10: Utilizar un bucle for...of para iterar sobre un array de autos e imprimir sus descripciones.

const autos = [
    {Marca:"Royota", Modelo: "Corolla", Año: 2000},
    {Marca:"Renault", Modelo: "Clio", Año: 2004},
    {Marca:"Volkswagen", Modelo: "Golf", Año: 2002},
];

for (const auto of autos){
    console.log(`${auto.Marca} ${auto.Modelo} ${auto.Año}`);
}
    