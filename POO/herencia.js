class Vehiculo {
nstructor(marca, modelo , precio=0) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }

  arrancar(){
    console.log(`${this.marca} ${this.modelo} ha arrancado`)
  }

  detener(){
    console.log(`${this.marca} ${this.modelo} se ha detenido`)
  }
} 


class Coche extends Vehiculo {
  abrirMaletero() {
    console.log(`El maletero del coche ${this.marca} ${this.modelo} se ha abierto`)
  }
}

class Motocicleta extends Vehiculo {
  hacerWheelie(){
    console.log(`La motocicleta esta haciendo un caballito`)
  }
}
// Instancia de la clase
let miCoche = new Coche('Toyota', 'Corolla')
miCoche.arrancar()
miCoche.abrirMaletero()
miCoche.detener()
let miCocheFerrari = new Coche('Ferrari', 'Maranello')

// miCoche.hacerWheelie()

let miMoto = new Motocicleta('Honda','CBR500R')
miMoto.arrancar()
miMoto.hacerWheelie()
miMoto.detener()


