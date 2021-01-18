//herança usando classes

class Animal{
    

    constructor(qtdePatas){
        this.qtdePatas = 0;
    }

    movimentar() {
        console.log("movimentando-se");
    }
}

class Cachorro extends Animal {

    constructor(morde){
        super();
        this.qtdePatas = 4;
        this.morde = morde;
    }

    latir() {
        console.log("Au! Au!");
    }
}

const pug = new Cachorro(false);
console.log(pug); //Cachorro { qtdePatas: 4, morde: false }
console.log( pug.latir() ); //Au! Au!
console.log( pug.movimentar() ); //movimentando-se

const pitbull = new Cachorro(true); 
console.log(pitbull); //Cachorro { qtdePatas: 4, morde: true }

