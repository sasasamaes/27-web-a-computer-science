class Queue {
  constructor() {
      this.items = [];
  }

  enqueue(element) {
      this.items.push(element);
  }

  dequeue() {
      return this.items.shift();
  }

  isEmpty() {
      return this.items.length === 0;
  }

  size() {
      return this.items.length;
  }

  peek() {
      return this.items[0];
  }

  get() {
      return this.items;
  }
}

function dividirCola(cola) {
  let cola1 = new Queue();
  let cola2 = new Queue();

  let index = 0;
  while(!cola.isEmpty()) {
      if(index % 2 === 0) {
          cola1.enqueue(cola.dequeue());
      } else {
          cola2.enqueue(cola.dequeue());
      }
      index++;
  }
  return [cola1.get(), cola2.get()];
}

function retirarColados(cola) {
  let colaFinal = new Queue();
  let retirados = [];

  while(!cola.isEmpty()) {
      let persona = cola.dequeue();
      if(persona.ticket) {
          colaFinal.enqueue(persona);
      } else {
          retirados.push(persona);
      }
  }
  return {
      colaInicial: cola.get(),
      retirados: retirados,
      colaFinal: colaFinal.get()
  };
}

