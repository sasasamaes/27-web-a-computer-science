/**
 * Las plantillas literales son cadenas literales que habilitan el uso de expresiones incrustadas. 
 * Con ellas, es posible utilizar cadenas de caracteres de más de una línea, 
 * y funcionalidades de interpolación de cadenas de caracteres.
 * En ediciones anteriores de la especificación ES2015, solían llamarse "string interpolation".
 * 
 */
const saludo = "Hola a todos";
const devf = "DEVF";

// String de interpolacion
console.log(saludo + " de computer science en " + devf);

// Template literals
console.log(`${saludo} de computer science en ${devf}`);