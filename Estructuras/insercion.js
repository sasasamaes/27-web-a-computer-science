// Se crea nuestro arreglo desordenado
const arrayDesordenado = [64, 34, 25, 12, 22, 11, 90, 20, 33, 15];

function ordenerInsercion(arreglo = []) {
  const n = arreglo.length;
  // [34, 64, 25, 12, 22, 11, 90, 20, 33, 15];
  //                  *
  for (let index = 0; index < n; index++) {
    const valorPosicion = arreglo[index];
    let j = index - 1;
    // [34, 64, 25, 12, 22, 11, 90, 20, 33, 15];
    //j      *
    console.log(`${arreglo[j]} > ${valorPosicion}`);
    while (j >= 0 && arreglo[j] > valorPosicion) {
      console.log(`Posicion de J: ${j}`, arreglo[j]);
      // Se hace la nueva asignacion
      arreglo[j + 1] = arreglo[j];
      console.log(`While asignacion: ${arreglo}`);
      // Se decrementa J para salir del loop while
      j--;
    }
    // // Se hace asignacion del valor de la posicion
    arreglo[j + 1] = valorPosicion;
    console.log(`Fuera del ciclo: ${arreglo}`);
  }

  return arreglo;
}

const nuevoArreglo = ordenerInsercion(arrayDesordenado);
console.log("Arreglo desordenado: ", arrayDesordenado);
console.log("Arreglo ordenado: ", nuevoArreglo);
