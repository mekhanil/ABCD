const events = require('events')

var eventEmitter= new events.EventEmitter();

var ringBell = function ringBell(){
    console.log('ring ring ring')
}

eventEmitter.on('dooropen',ringBell)
eventEmitter.emit('dooropen')