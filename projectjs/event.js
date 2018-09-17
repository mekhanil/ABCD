const EventEmitter= require('events')

const emitter = new EventEmitter()

//Register a listeners
emitter.on('MessageLogged',()=>{
    console.log('Event logged')
})

//Raising an event
emitter.emit('MessageLogged')



