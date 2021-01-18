/*padrao de criação - Singleton, o objetivo é retornar 
uma função construtora toda vez que necessario*/

//jQuery é Singleton

//Singleton sempre retorna a mesma instancia

function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}

const p = Pessoa.call({name: 'Igu'})
const p2 = Pessoa.call({name: 'Custom Name'})
console.log(p)
// { name: 'Igu' }
console.log(p2)
// { name: 'Igu' }
