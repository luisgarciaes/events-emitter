var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello');
});
emtr.on('greet', () => {
    console.log('A greeting ocurred!');
});

emtr.on('jump', ()=> {
    console.log('someone jumped!');
});
console.log(emtr)
emtr.emit('jump');


