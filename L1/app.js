function greet(){
    console.log("hello!");
};

greet();

//functions are first-class citizens (or first-class objects) in JavaScript, it means functions are treated like any other value — just like numbers, strings, or objects.

function f1(func){
func();
}

f1(greet);

// function expression : A function expression is when you create a function and assign it to a variable (or pass it directly as a value).

const myFunc = function(){
    console.log("I am function expression");
};

myFunc();

// pass the function directly into setTimeout
setTimeout(function() {
  console.log("This runs after 2 seconds!");
}, 2000);
