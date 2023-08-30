// Se crea nuestro arreglo desordenado
const arrayDesordenado = [64, 34, 25, 12, 22, 11, 90, 20, 33, 15];

function ordenarBubble(arreglo = []) {
  const n = arreglo.length;

  // Se hace el recorrido de los elementos
  // [64, 34, 25, 12, 22, 11, 90, 20, 33, 15];
  //       *
  for (let index = 0; index < n - 1; index++) {
    console.log('Posicion 1', arreglo[index]);
    // Se compara los elementos adyacentes
    // [34, 25, 12, 22, 11 90, 20, 33, 15];
    //                              *
    for (let j = 0; j < n - index - 1 ; j++) {
        console.log('**Ardenamiento en proceso**', arreglo);
        console.log('Posicion 2', arreglo[j + 1]);
        console.log(`Comparacion ${arreglo[j]} > ${arreglo[j + 1]}`);

      if (arreglo[j] > arreglo[j + 1]) {
        const temp = arreglo[j];
        console.log('Temporal', temp);
        arreglo[j] = arreglo[j + 1];
        arreglo[j + 1] = temp;
      }
    }
  }

  return arreglo;
}

// Guardamos nuetro nuevo arreglo
const nuevoArreglo = ordenarBubble(arrayDesordenado);
console.log("Valor inicial:", arrayDesordenado);
console.log("Valor final:", nuevoArreglo);
