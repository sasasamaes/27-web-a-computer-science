/**
 * Inversión de una Lista Enlazada
Escriba una función que tome una lista enlazada y la invierta, de modo que la cabeza se convierta en la cola y viceversa.
Ejemplo:
Entrada: 1 -> 2 -> 3 -> 4
Salida: 4 -> 3 -> 2 -> 1
Eliminar Duplicados
Escriba una función que elimine nodos duplicados de una lista enlazada no ordenada.
Ejemplo:
Entrada: 1 -> 2 -> 3 -> 2 -> 1
Salida: 1 -> 2 -> 3
Detectar un Ciclo
Determine si una lista enlazada tiene un ciclo. Un ciclo ocurre si algún nodo en la lista enlazada apunta a un nodo anterior en lugar de apuntar a null o a otro nodo futuro.
Pista: Puede usar el enfoque de "tortuga y liebre" (Floyd's Cycle-Finding Algorithm).
Encontrar el Nodo Medio
Escriba una función que encuentre y retorne el nodo medio de una lista enlazada.
Si la lista tiene un número par de nodos, retorne el segundo nodo medio.
Ejemplo:
Entrada: 1 -> 2 -> 3 -> 4 -> 5
Salida: 3
Entrada: 1 -> 2 -> 3 -> 4 -> 5 -> 6
Salida: 4
Eliminar el n-ésimo Nodo desde el Final
Escriba una función que elimine el n-ésimo nodo desde el final de la lista enlazada y retorne la cabeza de la lista.
Ejemplo:
Entrada: 1 -> 2 -> 3 -> 4 -> 5, n = 2
Salida: 1 -> 2 -> 3 -> 5
Combinar Dos Listas Enlazadas Ordenadas
Dadas dos listas enlazadas ordenadas de manera ascendente, combine las dos listas en una sola lista enlazada también ordenada.
Ejemplo:
Entrada: 1 -> 3 -> 5 y 2 -> 4 -> 6
Salida: 1 -> 2 -> 3 -> 4 -> 5 -> 6
 * 
 */
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// Define una clase para representar la lista enlazada
class LinkedList {
  constructor() {
    this.head = null // primer nodo de la lista
    this.size = 0 // tamaño de la lista
  }

  append(value) {
    // crea un nuevo nodo
    const newNode = new Node(value)
    //si la lista esta vacia
    if (!this.head) {
      this.head = newNode
    } else {
      //Si la lista no esta vacia
      let current = this.head
      while (current.next) {
        // mientras haya un siguiente nodo
        current = current.next // se pasa al siguiente nodo
      }
      current.next = newNode // colocamos el nuevo nodo al final de la lista
    }
    this.size++ // incrementamos el tamaño de la lista
  }

  // Método para agregar varios nodos a la lista
  multiAppend(arr) {
    arr.forEach((node) => {
      this.append(node)
    })
  }
  // Método para imprimir la lista enlazada
  print() {
    if (!this.head) {
      console.log('La lista esta vacia')
    } else {
      // si la lista no esta vacia
      let current = this.head // comenzamos desde la cabeza
      let str = 'Lista Enlazada: '
      while (current) {
        // mientras haya un nodo
        str += current.value + ' -> ' // concatenamos el valor del nodo
        current = current.next // pasamos al siguiente nodo
      }
      str += 'Null' // indicamos el final de la lista
      console.log(str)
    }
  }
  // Método para eliminar un nodo por su valor
  remove(data) {
    let current = this.head // comenzamos desde la cabeza
    let prev = null // Mantener un registro del nodo anterior

    // Iterar a través de la lista
    while (current !== null) {
      if (current.value === data) {
        // Si se encuentra el nodo
        if (prev === null) {
          // Si es el primer nodo
          this.head = current.next // La cabeza se convierte en el siguiente nodo
        } else {
          prev.next = current.next // El nodo anterior apunta al siguiente nodo, omitiendo el actual
        }
        this.size--
        return current.value
      }
      prev = current // Actualizar el nodo anterior
      current = current.next // Moverse al siguiente nodo
    }
  }
  // Método para buscar un nodo por su valor
  find(data) {
    let current = this.head // Empezar desde el inicio de la lista
    // Iterar a través de la lista
    while (current !== null) {
      if (current.value === data) {
        // Si se encuentra el nodo
        return current.value // Retornar el valor del nodo encontrado
      }
      current = current.next // Moverse al siguiente nodo
    }
    return null // Si no se encontró el nodo
  }

  invert() {
    // Si la lista está vacía, retornamos null
    if (!this.head) return null
    // Inicializamos tres punteros: prev, current y next
    let current = this.head // Este puntero siempre apuntará al nodo actual durante la iteración
    let prev = null // Este puntero siempre apuntará al nodo previo durante la iteración
    let next = null // Este puntero siempre apuntará al próximo nodo durante la iteración

    // Iteramos por cada nodo en la lista enlazada
    while (current) {
      // Guardamos el nodo siguiente al nodo actual en 'next'
      next = current.next
      // Cambiamos el puntero 'next' del nodo actual para que apunte al nodo previo
      current.next = prev
      // Movemos el puntero 'prev' y 'current' un nodo hacia adelante
      prev = current
      current = next
    }
    // Hacemos que la cabeza de la lista apunte al último nodo, completando así la inversión
    this.head = prev
    return this.head
  }

  removeDuplicate() {
    // Si la lista está vacía o tiene solo un elemento, no hay duplicados para eliminar
    if (!this.head || !this.head.next) return
    // Utilizamos un objeto para almacenar los valores únicos que encontramos
    const uniqueValues = {}

    // Inicializamos un puntero al nodo actual y uno al nodo previo
    let current = this.head
    let prev = null

    // Recorremos la lista enlazada
    while (current !== null) {
      // Si el valor del nodo actual ya existe en uniqueValues, eliminamos el nodo
      if (uniqueValues[current.value]) {
        prev.next = current.next
        this.size--
      } else {
        // De lo contrario, almacenamos el valor en uniqueValues y actualizamos el puntero previo
        uniqueValues[current.value] = true
        prev = current
      }
      // Avanzamos el puntero del nodo actual
      current = current.next
    }
  }

  hasCycle() {
    // Si la lista está vacía o tiene solo un elemento, no puede tener un ciclo
    if (!this.head || !this.head.next) return false

    // Inicializamos los punteros tortuga y liebre en la cabeza de la lista
    let tortuga = this.head
    let liebre = this.head

    // Recorremos la lista enlazada con los dos punteros
    while (liebre !== null && liebre.next !== null) {
      // Avanzamos la tortuga un nodo y la liebre dos nodos
      tortuga = tortuga.next
      liebre = liebre.next.next

      // Si los dos punteros se encuentran, hay un ciclo
      if (tortuga === liebre) {
        return true
      }
    }
    // Si llegamos al final de la lista, no hay un ciclo
    return false
  }

  findMiddleNode() {
    // Si la lista está vacía, retornamos null
    if (!this.head) return null
    // Inicializamos los punteros tortuga y liebre en la cabeza de la lista
    let tortuga = this.head
    let liebre = this.head

    // Recorremos la lista enlazada con los dos punteros
    while (liebre !== null && liebre.next !== null) {
      // Avanzamos la tortuga un nodo y la liebre dos nodos
      tortuga = tortuga.next
      liebre = liebre.next.next
    }
    // Cuando la liebre llegue al final, la tortuga estará en el nodo medio
    return tortuga.value
  }

  removeNthFromEnd(n) {
    // Si la lista está vacía, no hay nada que eliminar
    if (!this.head) return null

    // Inicializamos los dos punteros en la cabeza de la lista
    let primerPuntero = this.head
    let segundoPuntero = this.head

    // Mueve el primerPuntero n nodos hacia adelante
    for (let i = 1; i <= n; i++) {
      if (!primerPuntero.next) {
        // Si n es igual a la longitud de la lista, eliminar el primer nodo
        if(i === n){
          this.head = this.head.next
          return
        }
        throw new Error('n es mayor que la longitud de la lista')
      }
      primerPuntero = primerPuntero.next
    }
    // Mueve ambos punteros hasta que el primerPuntero llegue al final
    while(primerPuntero.next !== null){
      primerPuntero = primerPuntero.next
      segundoPuntero = segundoPuntero.next
    }
    // Elimina el n-ésimo nodo desde el final
    segundoPuntero.next = segundoPuntero.next.next
  }
}


function mergeSortedList(list1, list2){
      // Crea un nodo ficticio para actuar como la cabeza de la lista resultante
      let dummyNode = new Node(0)
      let current = dummyNode

      // Primer puntero para recorrer list1
      let p1 = list1.head
      let p2 = list2.head

          // Mientras ninguno de los punteros llegue al final de su respectiva lista
          while(p1 !== null && p2 !== null){
            if(p1.value < p2.value){
              // Si el valor del primer puntero es menor que el del segundo puntero
              // Agregamos el valor del primer puntero a la lista resultante
              current.next = p1
              // Movemos el puntero p1 un nodo hacia adelante
              p1 = p1.next
            } else {
              // Si el valor del segundo puntero es menor que el del primer puntero
              // Agregamos el valor del segundo puntero a la lista resultante
              current.next = p2
              // Movemos el puntero p2 un nodo hacia adelante
              p2 = p2.next
            }
            // Movemos el puntero actual un nodo hacia adelante
            current = current.next
          }

          // Si aún quedan elementos en list1
          if(p1 !== null){
            // Agregamos los elementos restantes de list1 a la lista resultante
            current.next = p1
          }
          // Si aún quedan elementos en list2
          if(p2 !== null){
            // Agregamos los elementos restantes de list2 a la lista resultante
            current.next = p2
          }
          // La cabeza de la lista resultante es el siguiente nodo del nodo ficticio
          return dummyNode.next
}


// Creamos una instancia de la clase LinkedList
// const list = new LinkedList()
// // Agregamos varios nodos a la lista
// list.multiAppend([1, 2, 3, 4, 5, 3])
// // Imprimimos la lista
// list.print()
// // Invertimos la lista
// list.invert()
// // Imprimimos la lista invertida
// list.print()
// // Eliminamos los duplicados
// list.removeDuplicate()
// // Imprimimos la lista sin duplicados
// list.print()
// // Detectamos si hay un ciclo
// console.log(list.hasCycle())
// // Encontramos el nodo medio
// console.log(list.findMiddleNode())
// // Eliminamos el n-ésimo nodo desde el final
// list.removeNthFromEnd(2)
// // Imprimimos la lista
// list.print()
// Creamos una instancia de la clase LinkedList
const list1 = new LinkedList()
// Agregamos varios nodos a la lista
list1.multiAppend([1, 3, 5])
// Imprimimos la lista
list1.print()
// Creamos una instancia de la clase LinkedList
const list2 = new LinkedList()
// Agregamos varios nodos a la lista
list2.multiAppend([2, 4, 6])
// Imprimimos la lista
list2.print()
// Combinamos las dos listas
const mergedList = mergeSortedList(list1, list2)
// Imprimimos la lista combinada
console.log(mergedList)
