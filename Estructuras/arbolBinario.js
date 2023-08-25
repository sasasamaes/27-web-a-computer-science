class TreeNode {
  constructor(value) {
    this.value = value // El valor almacenado en el nodo
    this.left = null // Referencia al hijo izquierdo del nodo
    this.right = null // Referencia al hijo derecho del nodo
  }
}

class BinaryTree {
  constructor() {
    this.root = null // La raíz del árbol
  }
  // Método para insertar un nuevo valor en el árbol
  insert(value) {
    const newNode = new TreeNode(value) // Creamos un nuevo nodo
    if (this.root === null) {
      // Si el árbol está vacío, el nuevo nodo se convierte en la raíz
      this.root = newNode
      return
    }
    let current = this.root
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode
          return
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode
          return
        }
        current = current.right
      }
    }
  }

  multiAppend(arr) {
    arr.forEach((node) => {
      this.insert(node)
    })
  }

  // Método para buscar un valor en el árbol
  search(value) {
    let current = this.root
    while (current !== null) {
      if (value === current.value) {
        return true
      }
      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }
  delete(value) {
    let current = this.root
    let parent = null

    //buscar el nodo y su padre
    while (current !== null) {
      if (value === current.value) {
        break
      }
      parent = current
      current = value < current.value ? current.left : current.right
    }

    //Si no se encuentra el nodo, regresar
    if (current === null) {
      return
    }
    // Caso 1: el nodo a eliminar es una hoja
    if (current.left === null && current.right === null) {
      if (parent === null) {
        this.root = null // El árbol queda vacío
      } else {
        if (parent.left === current) {
          parent.left = null
        } else {
          parent.right = null
        }
      }
    }
    // Caso 2: el nodo a eliminar tiene un solo hijo
    else if (current.left === null || current.right === null) {
      const child = current.left !== null ? current.left : current.right
      if (parent === null) {
        this.root = child
      } else {
        if (parent.left === current) {
          parent.left = child
        } else {
          parent.right = child
        }
      }
    }
    // Caso 3: el nodo a eliminar tiene dos hijos
    else {
      let succesor = current.right
      parent = current
      while (succesor.left !== null) {
        parent = succesor
        succesor = succesor.left
      }
      current.value = succesor.value
      if (parent.left === succesor) {
        parent.left = succesor.right
      } else {
        parent.right = succesor.right
      }
    }
  }

  // Método para recorrer el árbol en orden trasversal
  inOrderTravesal() {
    const result = []
    const stack = []
    let current = this.root

    while (current !== null || stack.length > 0) {
      while (current !== null) {
        stack.push(current)
        current = current.left
      }
      current = stack.pop()
      result.push(current.value)
      current = current.right
    }
    return result
  }
}

//Uso de la estructura de arbol
const tree = new BinaryTree()
tree.insert(5)
tree.insert(3)
tree.insert(7)
tree.insert(2)
tree.insert(4)
tree.insert(6)
tree.insert(8)
tree.delete(5)

console.log(tree)

console.log(tree.inOrderTravesal())


