const personas = ['Cesar', 'Maria', 'Pablo', 'Roberto']

const algunasPersonas = personas.filter((persona)=> persona !== 'Maria')

// console.log(algunasPersonas);

const autos = ['Audi', 'Vocho', "BMW", "VW", 'Toyota'];

const autoEncontrado = autos.find((auto)=> auto === 'BMW')

// console.log(autoEncontrado);

const numero = [1, 2, 3, 4]
// console.log('Antes de hacer push', numero);
numero.push(5)
// console.log('Despues de hacer push', numero);

const frutas = ['Uva', 'Fresa', 'Sandia', 'Melon']
console.log('Antes de eliminar', frutas);
console.log(`Se elimino la fruta: ${frutas.pop()}`);
console.log('Despues de eliminar', frutas);
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// Definición inicial del arreglo de frutas
let fruits = ['apple', 'banana'];

// 1. push(): Añadir al final
fruits.push('orange');
console.log(fruits);  // ['apple', 'banana', 'orange']

// 2. pop(): Eliminar el último elemento
let lastFruit = fruits.pop();
console.log(lastFruit);  // 'orange'

// 3. shift(): Eliminar el primer elemento
let firstFruit = fruits.shift();
console.log(firstFruit);  // 'apple'

// 4. unshift(): Añadir al inicio
fruits.unshift('strawberry');
console.log(fruits);  // ['strawberry', 'banana']

// 5. concat(): Combinar arreglos
let veggies = ['carrot', 'peas'];
let foods = fruits.concat(veggies);
console.log(foods);  // ['strawberry', 'banana', 'carrot', 'peas']

// 6. slice(): Extraer una porción del arreglo
let someFruits = fruits.slice(1, 3);
console.log(someFruits);  // ['banana']

// 7. splice(): Modificar el arreglo (añadir 'kiwi' en la posición 1)
fruits.splice(1, 0, 'kiwi');
console.log(fruits);  // ['strawberry', 'kiwi', 'banana']

// 8. forEach(): Iterar sobre el arreglo
fruits.forEach(function(fruit) {
    console.log('forEach:', fruit);
});

// 9. map(): Crear un nuevo arreglo a partir del existente
let capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(capitalizedFruits);  // ['STRAWBERRY', 'KIWI', 'BANANA']

// 10. filter(): Filtrar elementos del arreglo
let longFruits = fruits.filter(fruit => fruit.length > 6);
console.log(longFruits);  // ['strawberry']

// 11. reduce(): Reducir el arreglo a un solo valor
let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength);  // La suma total de las longitudes de las frutas

// 12. includes(): Verificar si un elemento está en el arreglo
let hasBanana = fruits.includes('banana');
console.log(hasBanana);  // true

// 13. find(): Buscar un elemento en el arreglo
let foundFruit = fruits.find(fruit => fruit.length > 6);
console.log(foundFruit);  // 'strawberry'

// 14. indexOf(): Obtener el índice de un elemento
let bananaIndex = fruits.indexOf('banana');
console.log(bananaIndex);  // 2








