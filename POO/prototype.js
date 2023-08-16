//Se declarar una funcion constructora llamada Animal que va actuar como base o superClase
function Animal(nombre){
  this.nombre = nombre;
}
// Se agregan metodos al prototipo de la funcion constructora Animal
Animal.prototype.hablar = function () {
  console.log(this.nombre + ' hace un sonido x')
}
// Se crea una funcion creadora llamada perro que va actuar cm subClase
function Perro(nombre){
  Animal.call(this, nombre);
}

// configurando el prototipo de la funcion perro para que sea una instancia de Animal
Perro.prototype = Object.create(Animal.prototype)
Perro.prototype.contructor = Perro

// poliformismo
Perro.prototype.hablar = function() {
  console.log(this.nombre + ' ladra')
}

const perro = new Perro('firulais')
perro.hablar()