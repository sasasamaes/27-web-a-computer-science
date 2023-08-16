/* Consta de la palabra reservada *function*, seguida de el nombre de la función
    * El nombre de la función.
    * Una lista de parámetros de la función, entre paréntesis y separados por comas.
    * Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }
*/ 
function jsTradicionalSuma(primerValor, segundoValor) {
    return `Como se declaraban las funciones antes para una numa: ${primerValor + segundoValor}`
}

/* Esta funcion se le conoce como ArrowFuntion, esta funcion tiene sus limitantes como:
    * No tiene sus propios enlaces a this o super y no se debe usar como métodos.
    * No se puede utilizar como constructor.
*/
jsAhoraSuma = (primerValor, segundoValor) => `Como se declaran ahora con una funcion de suma: ${primerValor + segundoValor}`

console.log(jsTradicionalSuma(10, 3));
console.log(jsAhoraSuma(2, 2));
