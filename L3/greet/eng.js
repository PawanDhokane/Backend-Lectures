const obj = require("./greeting.json");

console.log(obj);

console.log(obj.english);

function greet(){
    console.log("Hello");
};

module.exports = greet;