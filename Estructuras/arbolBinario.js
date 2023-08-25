// Clase para representar un nodo en el árbol binario
class TreeNode {
  constructor(value) {
    this.value = value // El valor almacenado en el nodo
    this.left = null // Referencia al hijo izquierdo del nodo
    this.right = null // Referencia al hijo derecho del nodo
  }
}
// Clase para representar el árbol binario completo
class BinaryTree {
  constructor() {
    this.root = null // La raíz del árbol, inicialmente nula
  }
  // Método para insertar un nuevo valor en el árbol
  insert(value) {
    const newNode = new TreeNode(value) // Creamos un nuevo nodo con el valor dado
    if (this.root === null) {
      // Si el árbol está vacío, el nuevo nodo se convierte en la raíz
      this.root = newNode
      return
    }
    let current = this.root // Comenzamos desde la raíz del árbol
    while (true) {
      // Este bucle seguirá hasta que se inserte el nodo
      if (value < current.value) {
        // Si el valor es menor que el nodo actual
        if (current.left === null) {
          // Y si el nodo actual no tiene un hijo izquierdo
          current.left = newNode // Insertamos el nuevo nodo aquí
          return
        }
        current = current.left // De lo contrario, seguimos buscando en el subárbol izquierdo
      } else {
        // Si el valor es mayor o igual al nodo actual
        if (current.right === null) {
          // Y si el nodo actual no tiene un hijo derecho
          current.right = newNode // Insertamos el nuevo nodo aquí
          return
        }
        current = current.right // De lo contrario, seguimos buscando en el subárbol derecho
      }
    }
  }
  // Método para insertar múltiples nodos a partir de un array
  multiAppend(arr) {
    arr.forEach((node) => {
      this.insert(node) // Insertamos cada valor del array en el árbol
    })
  }

  // Método para buscar un valor en el árbol
  search(value) {
    let current = this.root // Comenzamos desde la raíz
    while (current !== null) {
      // Mientras no lleguemos a un nodo nulo
      if (value === current.value) {
        // Si encontramos el valor, devolvemos true
        return true
      }
      // De lo contrario, decidimos si buscar en el subárbol izquierdo o derecho
      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false // Si llegamos aquí, el valor no está en el árbol
  }
  // Método para eliminar un nodo del árbol
  delete(value) {
    let current = this.root // Comenzamos desde la raíz del árbol
    let parent = null // Variable para almacenar el nodo padre del nodo actual

      // Buscar el nodo a eliminar y su nodo padre
    while (current !== null) {
      if (value === current.value) {
        break
      }
      parent = current // Actualizamos el nodo padre antes de movernos al siguiente nodo
      current = value < current.value ? current.left : current.right // Decidimos en qué subárbol buscar
    }

  // Si el nodo a eliminar no se encuentra, terminamos la función
  if (current === null) {
      return
    }
  // Caso 1: el nodo a eliminar es una hoja (no tiene hijos)
  if (current.left === null && current.right === null) {
      if (parent === null) {
        this.root = null // Si el nodo a eliminar es la raíz y es una hoja, el árbol queda vacío
      } else {
        if (parent.left === current) {
          parent.left = null  // Eliminamos la referencia al nodo desde su padre
        } else {
          parent.right = null // Eliminamos la referencia al nodo desde su padre
        }
      }
    }
  // Caso 2: el nodo a eliminar tiene un solo hijo
  else if (current.left === null || current.right === null) {
      const child = current.left !== null ? current.left : current.right // Identificamos al único hijo
      if (parent === null) {
        this.root = child // Si el nodo a eliminar es la raíz, el único hijo se convierte en la nueva raíz
      } else {
        if (parent.left === current) {
          parent.left = child  // Eliminamos el nodo actual y conectamos su padre con su único hijo
        } else {
          parent.right = child // Eliminamos el nodo actual y conectamos su padre con su único hijo
        }
      }
    }
    // Caso 3: el nodo a eliminar tiene dos hijos
    else {
      let succesor = current.right // El sucesor es el menor nodo del subárbol derecho
      parent = current
      // Encontramos el sucesor (el nodo más a la izquierda en el subárbol derecho)
      while (succesor.left !== null) {
        parent = succesor
        succesor = succesor.left
      }
      current.value = succesor.value  // Reemplazamos el valor del nodo a eliminar con el del sucesor
      if (parent.left === succesor) {
        parent.left = succesor.right // Eliminamos el sucesor
      } else {
        parent.right = succesor.right  // Eliminamos el sucesor
      }
    }
  }

  // Método para recorrer el árbol en orden trasversal
  inOrderTravesal() {
    const result = [] // Array para almacenar los nodos en su orden in-order
    const stack = []  // Pila para ayudar con el recorrido
    let current = this.root // Comenzamos desde la raíz

    // Este bucle se ejecuta mientras haya nodos en la pila o aún no hayamos llegado a un nodo nulo
    while (current !== null || stack.length > 0) {
      // Vamos lo más a la izquierda posible y almacenamos cada nodo en la pila
      while (current !== null) {
        stack.push(current)
        current = current.left
      }
      // Visitamos el nodo actual (el último en la pila)
      current = stack.pop()
      result.push(current.value)
      // Finalmente, intentamos ir al subárbol derecho

      current = current.right
    }
    return result // Devolvemos los nodos en su orden in-order
  }
}

// Código para probar la clase BinaryTree
const tree = new BinaryTree()
tree.insert(5)
tree.insert(3)
tree.insert(7)
tree.insert(2)
tree.insert(4)
tree.insert(6)
tree.insert(8)
// tree.delete(5)

console.log(tree) // Imprimimos el estado del árbol

console.log(tree.inOrderTravesal())
