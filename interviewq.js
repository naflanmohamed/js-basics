// function outer() {
//   var a = 1;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }

// outer(); // 1

// ----------------------------------------

// function outer() {
//   var a = 1;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }

// outer(); // nothing

// ----------------------------------------

// function outer() {
//   var a = 1;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }

// console.log(outer()); // [Function: inner]

// ----------------------------------------

// function outer() {
//   var a = 1;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }

// var close = outer();

// close(); // 1

// ----------------------------------------

// function outer() {
//   var a = 1;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }

// outer()(); // 1

// outer() returns inner function and then inner() is called

// ----------------------------------------

// function outer() {
//   function inner() {
//     console.log(a);
//   }
//   var a = 1; // even if this is declared after inner() function, it will still work
//   return inner;
// }

// var close = outer();

// close(); // 1

// ----------------------------------------

// function outer() {
//   function inner() {
//     console.log(a);
//   }
//   let a = 1; //we can use let instead of var as well.
//   return inner;
// }

// var close = outer();

// close(); // 1

// ----------------------------------------

// function outer(b) {
//   function inner() {
//     console.log(a, b);
//   }
//   let a = 1;
//   return inner;
// }

// var close = outer("hello");

// close(); // 1 hello

// ----------------------------------------

// function outer(b) {
//   function inner() {
//     console.log(a, b);
//   }
//   let a = 1;
//   return inner;
// }

// var close = outer("hello");

// close(); // 1 hello

// ----------------------------------------

// function outest() {
//   var c = 2;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     let a = 1;
//     return inner;
//   }
//   return outer;
// }
// outest()("hello")(); // 1 hello 2

// // var close = outest()("hello");

// // close();

// ----------------------------------------

// function outest() {
//   var c = 2;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     let a = 1;
//     return inner;
//   }
//   return outer;
// }
// let a = 10;
// var close = outest()("hello"); // 1 hello 2

// close();

//here a is global but it will not be used as it is not defined inside inner function
//if we define a inside inner function, it will take precedence over global a

// ----------------------------------------

//but if we don't have a inside inner function, it will take precedence over global a

// function outest() {
//   var c = 2;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     //   let a = 1;
//     return inner;
//   }
//   return outer;
// }
// let a = 10;
// var close = outest()("hello"); // 10 hello 2

// close();

// ----------------------------------------

//Data hiding using closures

// function counter() {
//   var count = 0;
//   return function () {
//     count++;
//   };
// }
// console.log(count); // ReferenceError: count is not defined

// ----------------------------------------

// function counter() {
//   var count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// var counter1 = counter();

// counter1(); // 1
// counter1(); // 2

// var counter2 = counter(); //new instance of counter

// counter2(); // 1

// ----------------------------------------

//using constructor function

// function counter() {
//   var count = 0;
//   this.incrementCounter = function () {
//     count++;
//     console.log(count);
//   };
//   this.decrementCounter = function () {
//     count--;
//     console.log(count);
//   };
// }

// var counter1 = new counter();

// counter1.incrementCounter(); // 1
// counter1.incrementCounter(); // 2
// counter1.incrementCounter(); // 3

// counter1.decrementCounter(); // 2

//----------------------------------------

//Garbage collection

function a() {
  var x = 10,
    z = 20;
  return function b() {
    console.log(x);
  };
}

var y = a();

y();
