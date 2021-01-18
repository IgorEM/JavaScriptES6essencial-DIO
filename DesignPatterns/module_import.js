const {getName, setName} = require('./module');

console.log(getName());
console.log(setName('Igor Eduardo Mascarenhas'));
console.log(getName());

/* Module - possibilita organizarmos melhor o nosso
codigo, sem a necessidade de expor
variaveis globais */