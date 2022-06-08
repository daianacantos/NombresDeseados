/*Estructuras de Datos – Arreglos
Ejercicio – Nombres Deseados
• Construya un algoritmo que tenga un arreglo
de dimensión deseada por el usuario y llénelo
con los nombres que el usuario desee
• Crear un arreglo de las posiciones que desee
el usuario y llenarlo con nombres de personas*/

let dimension: number = Number(prompt(" ingrese numero de dimension"));
let nombres: string[] = new Array(dimension);
for (let i = 0; i < nombres.length; i++) {
  nombres[i] = String(prompt(" ingrese nombres "));
  console.log(
    "los nombres en la posicion:" + "",
    i + "",
    "" + "es:" + "",
    "" + nombres[i]
  );
}
