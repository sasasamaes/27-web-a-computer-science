class Pila {
    constructor(){
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        if (this.isEmpty()) {
            return 'La pila ya esta vacia'
        }
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    toString() {
        return this.items.join(' \n ');
    }
}

const mensaje = new Pila()
console.log('Antes de empezar', mensaje.isEmpty());
mensaje.push('Hola,');
console.log(mensaje.size());
mensaje.push('Tengo una duda');
mensaje.push('¿Cómo te puedo ayudar?');
mensaje.push('nesesito aiuda?');
console.log(mensaje.toString());
mensaje.pop();
mensaje.push('Necesito ayuda');
console.log(mensaje.toString());