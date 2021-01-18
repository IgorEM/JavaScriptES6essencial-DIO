/*Decorator, recebe uma outra função 
como parâmetro e estende o seu comportamento sem
modificá-la explicitamente*/


let loggedIn = false;

function callIfAuthenticated(fn){
    return !!loggedIn && fn();
}


function sum(a, b){
    return a+b;
}

console.log(callIfAuthenticated( ()=> sum(2,3) ) ); //false

loggedIn = true;
console.log(callIfAuthenticated( ()=> sum(2,3) ) ); //5

loggedIn = false;
console.log(callIfAuthenticated( ()=> sum(2,3) ) ); //false
