// Poliformismo

// Clase Padre
class Animal {
  hablar () {
    return "Este animal hace un ruido x"
  }
}
// Clase Hijas
class Perro extends Animal {
  hablar() {
    return "Wao wao (Ladro)"
  }
}

class Gato extends Animal {
  
}

const animalEjem = new Animal()
const perroEjem = new Perro()
const gatoEjem = new Gato()

console.log("Instancia de clase Animal",animalEjem.hablar())
console.log("Instancia de clase perro",perroEjem.hablar())
console.log("Instancia de clase gato",gatoEjem.hablar())





