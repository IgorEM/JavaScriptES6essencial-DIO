//ForEach

const vector = ['Twister', 'Cg160 Start', 'XRE 300', 'Harley Davidson', 'Intruder']

vector.forEach((valor, indice) => {
    console.log(`${indice} ----> ${valor}`)
})

//Map
const array = [1,2,3];
array.map((valor,indice)=>{
    console.log(`${indice} ====> ${valor * 2}`)
})

//Flat
const array5 = [1,2,3,[4,5,[6,[7],8],9,10]];
console.log(array5.flat(3))

//FlatMap
const array6 = [13,22,34,93,34,55,63,74,83,93,140];
console.log( array6.flatMap(valor => [[valor * 2]]) )

// keys
const chaves = array6.keys()

var i=0;
while(i <= array6.length ) {
    console.log(chaves.next())
    i+=1
}

// values
const valores = array6.values()

var i=0;
while(i <= array6.length ) {
    console.log(valores.next())
    i+=1
}

// entries
const entradas = array6.entries()

var i=0;
while(i <= array6.length ) {
    console.log(entradas.next())
    i+=1
}

//find
const primeiroNumeroMaiorque50 = array6.find(valor => valor >50)
console.log(primeiroNumeroMaiorque50)

//findIndex
const primeiroIndiceMaiorque50 = array6.findIndex(valor => valor >50)
console.log(primeiroIndiceMaiorque50)

//Indexof
const primeiroIndiceseencontraonumero93 = array6.indexOf(93)
console.log(primeiroIndiceseencontraonumero93)

//lastIndexOf
const ultimoIndiceseencontraonumero93 = array6.lastIndexOf(93)
console.log(ultimoIndiceseencontraonumero93)

//include
const onumeroExiste = array6.includes(2)
const onumeroExiste2 = array6.includes(13)
console.log(onumeroExiste)
console.log(onumeroExiste2)

//some
const satisfaz = array6.some(valor => valor % 2 === 0)
const satisfaz1 = array6.some(valor => valor/140 === 1)
console.log(satisfaz)
console.log(satisfaz1)

//reverse, sort, join, reduce
const ordena = array6.sort()
console.log(ordena)
const reverte = array6.reverse()
console.log(reverte)
const joinar = array6.join('->')
console.log(joinar)


