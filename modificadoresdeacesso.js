function Person(initialname){
    let name = initialname;

    this.getName = function(){
        return name;
    }

    this.setName = function(newName){
        name = newName;
    }

}

const p = new Person("Igu");

console.log(p); //Person { getName: [Function], setName: [Function] }
console.log(p.getName()); //Igu
p.setName("Dudu");
console.log(p.getName()); //Dudu

//-------Utilizando Classe--------
class Pessoa{
    #name = ''; //hash é o modificador de acesso privado

    constructor(initialName){
        this.#name = initialName;
    }

    getName(){
        return this.#name;
    }

    setName(nome){
        this.#name = nome;
    }

}

const p1 = new Person("Igor");

console.log("\n\n--p1->" + p1 + "\n");

console.log(p1.getName()); //Igor
p1.setName("Eduardo");
console.log(p1.getName()); //Eduardo

