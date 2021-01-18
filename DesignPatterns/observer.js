/*Observer é um pattern muito popular
em aplicações java ScriptProcessorNode.applyA instancia (subscriber)
mantem uma coleçao de objetos(observers) e notifica todos
eles quando ocorrem mudanças no estado*/
//Vue (funcionalidade set), RxJs
class Observable{
    constructor(){
        this.observables = []
    }

    subscribe(fn){
        this.observables.push(fn);
    }

    notify(data){
        this.observables.forEach( fn => fn(data) );
    }

    unsubscribe(fn){
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}

const o = new Observable();

const logData1 = data => console.log( `Subscribe1: ${data}`)
const logData2 = data => console.log( `Subscribe2: ${data}`)
const logData3 = data => console.log( `Subscribe3: ${data}`)

o.subscribe(logData1) //registrando
o.subscribe(logData2)
o.subscribe(logData3)

o.notify('notificado 1');
o.unsubscribe(logData2)

o.notify('notificado 2')