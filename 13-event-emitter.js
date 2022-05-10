const EventEmmiter=require('events')

const customEmmiter = new EventEmmiter()

customEmmiter.on('response',() => {
    console.log('----1er listener----------------- Hecho');
})


customEmmiter.on('response',(name,id) => {
    console.log(`------2o listener para response con name=${name}, id=${id}`);
})

// Inercalar un event listener que se ejecuta solo una vez.
var ActivadorName=''
customEmmiter.once('response', (name)=>{ // Agrega el listener, solo una vez. No queda registrado en los listeners()
    ActivadorName=name
    console.log(`--LISTENER DE UNA VEZ. Guarde el name del activador = ${ActivadorName}`);
})

customEmmiter.on('response',function barrabas(...args) {
    const params = args.join(',')
    console.log(`--------3er listener, barrabas(${params}) --------- Done`);
})

customEmmiter.emit('response','Paul',17,2.14,false,{'datos':[7,5,3,1]})
customEmmiter.emit('response','Ringo',18,'2a vez que emito este evento')

console.log(`**************************************`);
console.log(`Listeners de mi customEmmiter para el evento response:\n`,customEmmiter.listeners('response'))
console.log(`listenerCount del evento 'response'': `,customEmmiter.listenerCount('response'))
console.log(`El name del activador inicial fue ${ActivadorName}`);
console.log(`**************************************`);

customEmmiter.removeListener('response',customEmmiter.listeners('response')[1]) // elimino el 2o listener
customEmmiter.emit('response','George',19,'Este no deberia activar el 2o listener. Veamos ...') // Ok.
