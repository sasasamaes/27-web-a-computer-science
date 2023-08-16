/*
    El operador nullish coalescing (??) (de coalescencia nula) es un operador lógico 
    que retorna el operando de lado derecho cuando el operando de lado izquierdo 
    es null o undefined, y en caso contrario retorna el operando de lado izquierdo.
*/

const funcionNullish = (texto) => texto ?? 'No enviaste algun texto';

console.log('Con argumento: ', funcionNullish('Hola a todos!!!'));
console.log('Sin argumento: ', funcionNullish());