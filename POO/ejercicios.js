/*
Ejercicio 1: Creación de Clases y Objetos
Clase Persona:
Propiedades: nombre, edad, email.
Métodos: presentarse que devuelve "Hola, mi nombre es [nombre] y tengo [edad] años.".
Clase Estudiante que hereda de Persona:
Propiedades adicionales: matricula, carrera.
Método estudiar que devuelve "Estudiando [carrera] con matrícula [matricula]".
Crea objetos de ambas clases y prueba sus métodos.
*/
// class Persona {
//   constructor(nombre, edad, email) {
//     this.nombre = nombre
//     this.edad = edad
//     this.email = email
//   }

//   presentarse() {
//     return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`
//   }
// }

// class Estudiante extends Persona {
//   constructor(nombre, edad, email, matricula, carrera) {
//     super(nombre, edad, email)
//     this.matricula = matricula
//     this.carrera = carrera
//   }

//   estudiar() {
//     return `Estudiando ${this.carrera} con matrícula ${this.matricula}`
//   }
// }

// const persona1 = new Persona('Juan', 25, 'juan@email.com')
// console.log(persona1.presentarse())

// const estudiante1 = new Estudiante(
//   'Ana',
//   20,
//   'ana@email.com',
//   '12345',
//   'Ingeniería',
// )
// console.log(estudiante1.estudiar())

/*Ejercicio 2: Trabajando con Prototipos
Prototipo Vehiculo:
Propiedades: marca, modelo.
Métodos: encender que imprime "El [marca] [modelo] está encendido.".
Prototipo Moto que hereda de Vehiculo:
Métodos: hacerWheelie que imprime "La [marca] [modelo] está haciendo un wheelie!".
Crea objetos de ambos prototipos y prueba sus métodos. */

// Constructor del prototipo Vehiculo
// function Vehiculo(marca, modelo) {
//   this.marca = marca;    // Inicialización de la propiedad marca
//   this.modelo = modelo;  // Inicialización de la propiedad modelo
// }

// // Método para encender el vehículo
// Vehiculo.prototype.encender = function() {
//   console.log(`El ${this.marca} ${this.modelo} está encendido.`);
// }

// // Constructor del prototipo Moto que hereda de Vehiculo
// function Moto(marca, modelo) {
//   Vehiculo.call(this, marca, modelo); // Llama al constructor de Vehiculo
// }

// // Herencia del prototipo Vehiculo a Moto
// Moto.prototype = Object.create(Vehiculo.prototype);
// Moto.prototype.constructor = Moto;

// // Método para hacer un wheelie con la moto
// Moto.prototype.hacerWheelie = function(pron) {
//   console.log(`${pron} ${this.marca} ${this.modelo} está haciendo un wheelie!`);
// }

// // Creación de un objeto del prototipo Vehiculo
// const vehiculo1 = new Vehiculo("Toyota", "Corolla");
// vehiculo1.encender(); // Invocación del método encender

// // Creación de un objeto del prototipo Moto
// const moto1 = new Moto("Honda", "CBR");
// moto1.hacerWheelie('La'); // Invocación del método hacerWheelie
// moto1.encender();     // Invocación del método encender heredado de Vehiculo

/*
Ejercicio 3: Sobrescritura de Métodos y Super
Crea una clase CuentaBancaria con:
Propiedades: titular, saldo.
Métodos:depositar(cantidad) que incrementa el saldo.
retirar(cantidad) que decrementa el saldo.
Luego, crea una clase CuentaAhorro que herede de CuentaBancaria y que sobrescriba el método retirar para que, además de retirar, deduzca un cargo de servicio de 5 unidades monetarias por cada retiro.
 */

// Definición de la clase CuentaBancaria
// class CuentaBancaria {
//   // Constructor de la clase
//   constructor(titular, saldo = 0) {
//       this.titular = titular;  // Inicialización de la propiedad titular
//       this.saldo = saldo;      // Inicialización de la propiedad saldo
//   }

//   // Método para depositar una cantidad
//   depositar(cantidad) {
//       this.saldo += cantidad;
//   }

//   // Método para retirar una cantidad
//   retirar(cantidad) {
//       this.saldo -= cantidad;
//   }
// }

// // Definición de la clase CuentaAhorro que hereda de CuentaBancaria
// class CuentaAhorro extends CuentaBancaria {
//   // Sobrescritura del método retirar
//   retirar(cantidad) {
//       super.retirar(cantidad); // Llama al método retirar de CuentaBancaria
//       this.saldo -= 5;        // Deducción del cargo de servicio
//   }
// }

// // Creación de un objeto de la clase CuentaAhorro
// const cuenta = new CuentaAhorro("Carlos", 100);
// cuenta.retirar(10);
// cuenta.retirar(10);          // Retiro con deducción del cargo de servicio
// console.log(cuenta.saldo);    // Impresión del saldo actual

/**
 * 
 * Ejercicio 4: Getters y Setters
Crea una clase Libro con:
Propiedades: titulo, autor, añoPublicacion.
Getters y setters para cada propiedad.
Un método resumen que devuelva "El libro [titulo] fue escrito por [autor] en el año [añoPublicacion].".
Prueba creando un libro y modificando y obteniendo sus propiedades a través de los getters y setters.
 */
// Definición de la clase Libro
class Libro {
  // Constructor de la clase
  constructor(titulo, autor, anioPublicacion) {
    this._titulo = titulo // Inicialización de la propiedad título
    this._autor = autor // Inicialización de la propiedad autor
    this._anioPublicacion = anioPublicacion // Inicialización de la propiedad añoPublicacion
  }

  // Getter para la propiedad título
  get titulo() {
    return this._titulo
  }

  // Setter para la propiedad título
  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo
  }

  // Getter para la propiedad autor
  get autor() {
    return this._autor
  }

  // Setter para la propiedad autor
  set autor(nuevoAutor) {
    this._autor = nuevoAutor
  }
  // Getter para la propiedad añoPublicacion
  get anioPublicacion() {
    return this.anioPublicacion
  }
  set anioPublicacion(nuevoAnioPublicacion) {
    this._anioPublicacion = nuevoAnioPublicacion
  }

  // Método para devolver un resumen del libro
  resumen() {
    return `El libro ${this.titulo} fue escrito por ${this.autor} en el año ${this.anioPublicacion}.`
  }
}

// Creación de un objeto de la clase Libro
const libro1 = new Libro('1984', 'George Orwell', 1949)
console.log(libro1.resumen()) // Impresión del resumen del libro
libro1.titulo = 'Animal Farm' // Modificación del título mediante el setter
console.log(libro1.resumen()) // Impresión del resumen actualizado del libro
