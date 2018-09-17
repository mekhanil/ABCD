


const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

const emitter = new MyEmitter()

emitter.on('IamOn',()=>{
    console.log("It is ON")
})

emitter.emit('IamOn')

