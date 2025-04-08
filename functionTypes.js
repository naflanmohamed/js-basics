// greet(); //hi
// anonymousGreet(); //Error: anonymousGreet is not a function

//Function Statement
function greet() {
  console.log("hi");
}

//Function Expression
var anonymousGreet = function () {
  console.log("hello");
};

//difference between function statement and function expression
//in function statement, the function can be hoisted to the top of the code
//in function expression, the function can only be called after the function expression

//Anonymous function

// function(){

// }
//this is an anonymous function because it has no name

//Named function expression

var a = function namedFunction() {
  console.log("named function");
  console.log(namedFunction);
};

// // namedFunction(); //Error: namedFunction is not defined

// a(); //named function

//Difference between parameters and arguments

//First Class Functions
//Functions can be passed as arguments to other functions
//Functions can be returned from other functions

var b = function (param) {
  console.log(param);
};

function x() {}

b(x);

// ----

var z = function (param1) {
  return function xyz() {};
};

console.log(z()); // [Function]
