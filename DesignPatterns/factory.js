//padrao de criação - Factory, pois nao é necessario usar o new

function FakeUser(customPropertiers){
    return{
        name: 'Igor',
        lastName: 'Eduardo',
        ...customPropertiers //spread
    }
}

const user = FakeUser({name:'Rute', age: 24, favorite_color: 'pink'})
console.log(user)
//{ name: 'Rute', lastName: 'Eduardo', age: 24, favorite_color: 'pink' }
//podemos alterar as propriedades ou adicionar novas