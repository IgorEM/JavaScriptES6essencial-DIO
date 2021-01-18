function Pessoa(nome, idade) {

    this.nome = nome;
  
    this.idade = idade;
  
  
  
    return {
  
      nome,
  
      idade: 20,
  
      falar() {
  
        console.log('objeto falar');
  
      }
  
    }
  
  }
  
  
  
  Pessoa.prototype.falar = function() {
  
    console.log('prototype falar');
  
  };
  
  
  
  const pessoa = new Pessoa('Foo', 30);
  console.log(pessoa)
  console.log(pessoa.constructor === Pessoa)
  console.log(pessoa.constructor === Object)
  console.log(pessoa.__proto__.falar === undefined)
  pessoa.falar()