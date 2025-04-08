// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 5000);
//   console.log("Hello");
// }
// console.log("World");
// x();

//this is wrong beacuse var
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Hello");
// }

// x();

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     //let is block scope
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Hello");
// }

// x();

// or

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(a) {
      setTimeout(function () {
        console.log(a);
      }, a * 1000);
    }
    close(i);
  }
  console.log("Hello");
}

x();

// The function close(a) ensures that a (the loop variable) is passed as a function argument,
// so each timeout function remembers the correct value.
