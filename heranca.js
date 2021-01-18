'use strict'; //chama exceções quando usamos variáveis não declaradas, por exemplo. Ou seja, o código é executado de forma mais rigorosa, por isso é chamado de strict mode ou modo restrito.
//herança usando prototype

const meuTexto = 'Oi prototype';
console.log(meuTexto.split('')) // [ 'O', 'i', ' ', 'p', 'r', 'o', 't', 'o', 't', 'y', 'p', 'e' ]
//de onde vem esse split?

// fazer isso é o mesmo que fazer:
const meuTexto1 = String('Oi prototype');
console.log(meuTexto1.__proto__.split); //[Function: split]
console.log(String.prototype.split); //[Function: split]

//-----------------------------

function Animal(qtdePatas){
    this.qtdePatas = qtdePatas;
    this.movimentar = function() {
        console.log("Animal se movimentando");
    }
}

const cachorro = new Animal(4); // é criado o cachorro.__proto__ e o proto aponta para o Animal.prototype
console.log(cachorro.qtdePatas) //4

console.log(typeof(cachorro)) //object

console.log(cachorro instanceof Animal) //true
console.log(cachorro instanceof Function) //false

//-----------------------------

function Pessoa(nome){
    this.nome = nome
}

const p = new Pessoa("Igor")
console.log(p) //Pessoa { nome: 'Igor' }

//----------isso é um tipo de herança-------------------

function Cachorro(morde){
    this.morde = morde;

    Animal.call(this, 4); // to chamando a função animal e passando o contexto e a qt de patas

    this.latir = function() {
        console.log('Au! Au!');
    }
}

const pug = new Cachorro(false);
console.log(pug)

//------------------------------------

const pitbull = new Cachorro(true);
console.log(pitbull)

//---------MODO CORRETO DE FAZER

function Animal1(){}

Animal1.prototype.qtdePatas = 0;
Animal1.prototype.movimentar = function() {console.log("animal se movimentando")}

function Cachorro1(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro1.prototype = Object.create(Animal1);
Cachorro1.prototype.latir = function() {
    console.log("Au! Au!");
}

console.log("\n \n ---- \n")

const pug1 = new Cachorro1(false);
const pitbull1 = new Cachorro1(true);

console.log(pug1.__proto__)
console.log(pitbull1)