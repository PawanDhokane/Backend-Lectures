const Emitter = require('./emitter');

const emitter1 = new Emitter();

emitter1.on('greet',()=>{console.log("Hello from emitter1 (event 1)")});
emitter1.on('greet',()=>{console.log("Hello once again from emitter1 ! (event 2)")});
emitter1.on('greetByName',(name)=>{console.log(`Hello ${name} !`)});
emitter1.on('sayAge',(name , age)=>{console.log(`Hello ${name} ! You are ${age} yrs old`)});

emitter1.emit("greet");
emitter1.emit("greetByName","Pawan");
emitter1.emit("sayAge","ACP",50);
