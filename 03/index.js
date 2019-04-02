const EventEmitter = require('events');

class CustomEmitter extends EventEmitter{

}

const mEmitter = new CustomEmitter();
const eventName = 'user:click';

mEmitter.on(eventName, function(click){
    console.log('Click detected', click);
})

// mEmitter.emit(eventName, 'at the middle of the screen');
// mEmitter.emit(eventName, 'at the space bar');
//
// let count = 0;
//
// setInterval(function(){
//     mEmitter.emit(eventName, 'at the space bar ' + count++);
// }, 1000)

const stdin = process.openStdin();
stdin.addListener('data', function(value){
    console.log(`You typed ${value.toString().trim()}`);
})
