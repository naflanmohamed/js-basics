// //callback function
// function x() {
//   console.log("x");
// }

// //higher order function
// function y() {
//   x();
// }

// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//   const output = {};
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[1]);
//   }
//   return output;
// };

// console.log(calculateArea(radius));

// const caluculateCircumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };

// console.log(caluculateCircumference(radius));

// const caluculateDiameter = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };

//shortened code

const radius = [3, 1, 2, 4];

//callback function
const area = function (radius) {
  return Math.PI * radius * radius;
};

//callback function
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

//callback function
const diameter = function (radius) {
  return 2 * radius;
};

//higher order function
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(radius.map(area)); // [28.274333882308138, 3.141592653589793, 12.566370614359172, 50.26548245743669]

console.log(calculate(radius, area)); //similar to map but with a custom function
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate(area));
