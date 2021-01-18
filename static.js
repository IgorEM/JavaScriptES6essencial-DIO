'use strict'

function pessoa(){}


pessoa.andar = function(){
console.log("andando...");
}

console.log(pessoa.andar());

//-----------com classe--------

class Person{

    static walk() { //palavra chave static pra chamar sem instanciar
        console.log('walking...');
    }

}

console.log(Person.walk())