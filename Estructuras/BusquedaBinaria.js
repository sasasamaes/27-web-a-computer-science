function busquedaBinaria(arreglo = [], target) {
  let left = 0;
  let right = arreglo.length;
  let loop = 0;
  while (left <= right) {
    loop++;
    const index = Math.floor((left + right) / 2);
    // Si lo encuentra
    if (arreglo[index] === target) {
      console.log("loop", loop + 1);
      return `Se encontro: ${arreglo[index]}`;
      // si es menor
    } else if (arreglo[index] < target) {
      left = index + 1;
      // si es mayor
    } else {
      right = index - 1;
    }
  }
  return "No se encuentra su numero a buscar";
}

function busquedaLineal(arreglo = [], target) {
  for (let index = 0; index < arreglo.length; index++) {
    const element = arreglo[index];
    if (element === target) {
      console.log("index", index + 1);
      return `Se encontro: ${element}`;
    }
  }
  return "No se encuentra su numero a buscar";
}

console.log(
  busquedaBinaria([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 40, 100], 100)
);
console.log(
  busquedaLineal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 40, 100], 100)
);

