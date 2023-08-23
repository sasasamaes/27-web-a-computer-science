// Dodo en la lista define una clase para representar un nenlazada
class Node {
  // Constructor que toma el valor del nodo y el siguiente nodo
  constructor(value) {
    this.value = value // valor almacenado en el nodo
    this.next = null // referencia al siguiente nodo, inicialmente es null
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
      while (current.next) { // mientras haya un siguiente nodo
        current = current.next // se pasa al siguiente nodo
      }
      current.next = newNode  // colocamos el nuevo nodo al final de la lista
    }
    this.size++ // incrementamos el tamaño de la lista
  }
  // Método para imprimir la lista enlazada
  print() {
    if(!this.head){
      console.log("La lista esta vacia")
    } else { // si la lista no esta vacia
      let current = this.head // comenzamos desde la cabeza
      let str = 'Lista Enlazada: '
      while (current) { // mientras haya un nodo
        str += current.value + ' -> ' // concatenamos el valor del nodo
        current = current.next // pasamos al siguiente nodo
      }
      str += 'Null';  // indicamos el final de la lista
      console.log(str)
    }
  }
}

//Ejemplos de uso
const lista = new LinkedList()
lista.append(1)
lista.append(20)
lista.append(300)
lista.append(4000)
lista.print()
