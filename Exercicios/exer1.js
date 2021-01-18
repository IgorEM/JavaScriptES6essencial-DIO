class ID {

	static #contador = 0;



  static get contador() {

    return this.#contador;

  }



  static incrementaContador() {

    return ++this.#contador;

  }

}



class Cliente {

  #id = 0;



  constructor() {

    this.#id = ID.incrementaContador();

  }



  get id() {

    return this.#id;

  }

}



const c1 = new Cliente();

console.log(`Contador atual: ${ID.contador}.`);



const c2 = new Cliente();

const c3 = new Cliente();



console.log(`Contador atual: ${ID.contador}.`);
