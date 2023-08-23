class Stack {
  constructor() {
      this.items = [];
  }

  push(element) {
      this.items.push(element);
  }

  pop() {
      return this.items.pop();
  }

  size() {
      return this.items.length;
  }

  isEmpty() {
      return this.items.length === 0;
  }

  peek() {
      return this.items[this.items.length - 1];
  }

  get() {
      return this.items;
  }
}

// function mifuncion(pila, num) {
//   let result = [];
//   for (let i = 0; i < num; i++) {
//       result.push(pila.pop());
//   }
//   return result.reverse();
// }

// let pila = new Stack()
// pila.push('Manzana')
// pila.push('Pera')
// pila.push('Sandia')
// pila.push('Papaya')
// pila.push('Melon')
// pila.push('Cebolla')
// pila.push('Melon')
// console.log(mifuncion(pila,4))
/*
2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7]
 */

function reemplazar(pila, nuevo, viejo) {
    let tempStack = new Stack();
    while(!pila.isEmpty() && pila.peek() !== viejo) {
        tempStack.push(pila.pop());
    }
    if(!pila.isEmpty()) pila.pop(); // Remove the old element
    pila.push(nuevo);
    while(!tempStack.isEmpty()) {
        pila.push(tempStack.pop());
    }
    return pila.get();
}


//4

function retirarContenedor(pila, contenedorId) {
    let tempStack = new Stack();
    while(!pila.isEmpty() && pila.peek() !== contenedorId) {
        tempStack.push(pila.pop());
    }
    if(!pila.isEmpty()) pila.pop(); // Remove the target container
    while(!tempStack.isEmpty()) {
        pila.push(tempStack.pop());
    }
    return pila.get();
}
