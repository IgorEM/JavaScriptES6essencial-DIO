const array = [1,2,3];
const vetor = new Array(4,5,6);
const person = Array.of('José', 'Maria', 'Pedro')
const diferentesTipos = Array.of(58, true, 'Banana', 4.5, 'Uva')
console.log(array);
console.log(vetor);
console.log(person);
console.log(diferentesTipos)

const arr = Array(3) // cria 3 posições vazias
console.log(arr) // [ <3 empty items> ]

const arr1 = new Array(3)
console.log(arr1) //[ <3 empty items> ]

const v1 = Array(8,'Manga',5,'Jaca',1.2,false)
console.log(v1) //  [ 8, 'Manga', 5, 'Jaca', 1.2, false ]



// const divs = document.querySelectorAll('div');  // <-- gera um node list
// const transformaEmArray = Array.from(divs);     // <-- transformar o node list em array




//----PUSH and POP , Unshift, Shift, flat

const frutas = ['banana', 'maçã']
const retornoPush = frutas.push('melancia')

console.log(retornoPush) // 3 , o tamanho do array
console.log(frutas) //  [ 'banana', 'maçã', 'melancia' ]

const retornoPop = frutas.pop()
console.log(retornoPop) // melancia (retorna o item removido)
console.log(frutas) // [ 'banana', 'maçã' ]


frutas.unshift('acerola') //insere no inicio do array
console.log(frutas)

console.log ( frutas.shift() ) //remove do inicio
console.log(frutas)

const lanches = Array('coxinha', 'cachorro-quente', 'hamburguer')
console.log(lanches)

//---------Concat, Slice, Splice,
const alimentos = frutas.concat(lanches)
console.log(alimentos)


console.log(alimentos.slice(1,3)) //pega uma fatia de acordo com os indices passados por param

console.log(alimentos.splice(1,3)) // splice nao é imutavel, ele modifica o array
//slice(-1) - pega o ultimo

console.log(alimentos) // sobrou [ 'banana', 'hamburguer' ]

const motos = Array('Twister', 'Cg160 Start', 'XRE 300', 'Harley Davidson', 'Intruder')
motos.splice(2,3,'Igor') // indicedeInicio,qtdeElementos,elementoquequerinserir
console.log(motos) //[ 'Twister', 'Cg160 Start', 'Igor' ]



